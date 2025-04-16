const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  let extname = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    // Adaugă mai multe tipuri MIME dacă este necesar
  };

  // Verificăm dacă fișierul există
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Fișierul nu a fost găsit
      filePath = path.join(__dirname, '404.html');
      extname = '.html';
    }

    // Citim fișierul cerut
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Eroare de citire a fișierului
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Eroare de server");
      } else {
        // Setăm tipul conținutului
        res.writeHead(200, { 'Content-Type': contentType[extname] || 'text/plain' });
        res.end(data);
      }
    });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});

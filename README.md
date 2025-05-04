# Web Development Project

## Descriere
Acest proiect reprezintă o aplicație web care include mai multe pagini și funcționalități interactive, cum ar fi autentificare, validare de formulare, temporizator, galerie de imagini și multe altele. Proiectul este construit folosind HTML, CSS, JavaScript și PHP.

## Structura Proiectului
- **HTML**: Structura paginilor web.
- **CSS**: Stilizarea paginilor web.
- **JavaScript**: Funcționalități interactive și manipularea DOM.
- **PHP**: Trimiterea emailurilor prin formulare.
- **JSON**: Date statice pentru utilizatori.

### Fișiere principale:
1. **HTML**:
   - `index.html`: Pagina principală.
   - `login.html`: Pagina de autentificare.
   - `grile.html`: Pagina cu grile interactive.
   - `istoriaMedicinei.html`: Pagina despre istoria medicinei.
   - `galerie.html`: Galerie de imagini.
   - `echipa.html`: Pagina echipei.
   - `anatomie.html`: Pagina despre anatomia umană.
   - `contacte.html`: Pagina de contact.
   - `404.html`: Pagina de eroare pentru resurse inexistente.

2. **CSS**:
   - `style.css`: Stilizarea principală a aplicației.
   - `imagini/stylesheet.css`: Stiluri suplimentare pentru butoane.

3. **JavaScript**:
   - `script.js`: Gestionarea autentificării utilizatorilor.
   - `validare.js`: Validarea formularelor.
   - `temporizator.js`: Temporizator pentru grile.
   - `culoare.js`: Schimbarea aleatoare a culorilor.
   - `culoaremod.js`: Modificarea stilului unui element.
   - `data.js`: Afișarea datei și orei curente.
   - `adugarestergere.js`: Adăugarea și ștergerea elementelor din DOM.
   - `computedstyle.js`: Obținerea stilurilor calculate ale unui element.

4. **PHP**:
   - `send_email.php`: Trimiterea emailurilor prin formulare.

5. **JSON**:
   - `date.json`: Date statice despre utilizatori.

6. **Node.js**:
   - `server.js`: Server HTTP pentru servirea fișierelor statice.

## Funcționalități
- **Autentificare**: Utilizatorii se pot autentifica și deconecta.
- **Validare Formulare**: Validare a datelor introduse în formulare folosind expresii regulate.
- **Temporizator**: Contor pentru timpul rămas la completarea grilelor.
- **Galerie de Imagini**: Afișarea imaginilor într-un format tabelar.
- **Schimbare Stil**: Modificarea dinamică a culorilor și stilurilor elementelor.
- **Trimitere Email**: Trimiterea mesajelor printr-un formular de contact.
- **404 Page**: Pagina de eroare pentru resurse inexistente.

## Cum să rulezi proiectul
1. **Server Local**:
   - Rulează `server.js` folosind Node.js:
     ```bash
     node server.js
     ```
   - Accesează aplicația la [http://localhost:3000](http://_vscodecontentref_/0).

2. **PHP Server**:
   - Asigură-te că ai un server PHP instalat (ex. XAMPP).
   - Copiază fișierele în directorul `htdocs` și accesează aplicația prin browser.

## Dependențe
- **Node.js**: Pentru serverul HTTP.
- **Nodemailer**: Pentru trimiterea emailurilor.
- **Express**: Framework pentru serverul Node.js.

## Autor
Proiect realizat de **Vasile Daria-Gabriela**.

## Licență
Acest proiect este licențiat sub licența ISC.

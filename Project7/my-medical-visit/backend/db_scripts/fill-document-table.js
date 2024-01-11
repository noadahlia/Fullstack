const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'e315439554',
  database: 'myMedicalVisit'
});

// Connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie');

  // Répertoire contenant les fichiers PDF fictifs
  const pdfDirectory = './documents';

  // Nombre de documents PDF à insérer de manière aléatoire
  const numDocuments = 200;

  // Liste de types de documents fictifs
  const documentTypes = ['Prescription','Medical Certificate','Blood Test',];


  // Insertion de documents PDF de manière aléatoire
  for (let i = 1; i < numDocuments+1; i++) {
    const randomDocumentType = faker.helpers.arrayElement(documentTypes);
    const randomPatientId = faker.number.int({ min: 1, max: 50 }); // ID du patient aléatoire
    const fileName = 'doc'+ i+'.pdf';
    const filePath = path.join(pdfDirectory, fileName);

    const document = {
      document_type: randomDocumentType,
      patient_id: randomPatientId,
      document_pdf: fs.readFileSync(filePath)
    };

    // Insertion du document dans la table "document"
    connection.query('INSERT INTO document SET ?', document, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion du document :', err);
      } else {
        console.log('Document inséré avec l\'ID :', result.insertId);
      }
    });
  }

  // Fermeture de la connexion à la base de données
  connection.end(err => {
    if (err) {
      console.error('Erreur lors de la déconnexion de la base de données :', err);
      return;
    }
    console.log('Déconnexion de la base de données réussie');
  });
});

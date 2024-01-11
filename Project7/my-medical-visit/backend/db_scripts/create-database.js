const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost', // Remplacez par l'hôte de votre base de données
  user: 'root', // Remplacez par votre nom d'utilisateur MySQL
  port:3306,
  password: 'bontravail!', // Remplacez par votre mot de passe MySQL
  database: 'myMedicalVisit' // Remplacez par le nom de votre base de données
});

// Connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie');

  // Remplissage de la table "speciality"
  const medicalSpecialties = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Urology"
  ];
  for (let i = 0; i < 10; i++) { // Vous pouvez ajuster le nombre de spécialités   
    const speciality = { speciality_name: medicalSpecialties[i]}; // Génère un nom de spécialité aléatoire
    connection.query('INSERT INTO speciality SET ?', speciality, (err, result) => {
      if (err) throw err;
      console.log('Spécialité insérée avec l\'ID :', result.insertId);
    });
  }

  // Remplissage de la table "doctor"
  for (let i = 0; i < 20; i++) { // Vous pouvez ajuster le nombre de médecins
    const doctor = {
      doctor_name: faker.person.fullName(),
      speciality_id: faker.number.int({ min: 1, max: 10 }), // Spécialité aléatoire
      doctor_address: faker.address.streetAddress(),
      doctor_phone: faker.phone.number('05#-###-####')
    };
    connection.query('INSERT INTO doctor SET ?', doctor, (err, result) => {
      if (err) throw err;
      console.log('Médecin inséré avec l\'ID :', result.insertId);
    });
  }

  // Remplissage de la table "patient"
  for (let i = 0; i < 50; i++) { // Vous pouvez ajuster le nombre de patients
    const patient = {
      patient_name: faker.person.fullName(),
      patient_blood_type: faker.helpers.arrayElement(['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']),
      patient_phone: faker.phone.number('05#-###-####'),
      patient_address: faker.address.streetAddress(),
      birth_date: faker.date.between('1950-01-01', '2005-12-31') // Date de naissance entre 1950 et 2005
    };
    connection.query('INSERT INTO patient SET ?', patient, (err, result) => {
      if (err) throw err;
      console.log('Patient inséré avec l\'ID :', result.insertId);
    });
  }

  // Remplissage de la table "appointment"
  for (let i = 0; i < 100; i++) { // Vous pouvez ajuster le nombre d'appointements
    const appointment = {
      doctor_id: faker.number.int({ min: 1, max: 20 }), // Médecin aléatoire
      patient_id: faker.number.int({ min: 1, max: 50 }), // Patient aléatoire
      appointment_date: faker.date.between('2022-01-01', '2023-12-31'), // Date d'appointment aléatoire entre 2022 et 2023
      appointment_start_time: `${faker.number.int({ min: 8, max: 17 })}:00:00`, // Horaire entre 8h et 17h
      appointment_duration: faker.number.int({ min: 30, max: 120 }), // Durée aléatoire entre 30 et 120 minutes
      appointment_show: faker.datatype.boolean() // Indicateur aléatoire de rendez-vous montré
    };
    connection.query('INSERT INTO appointment SET ?', appointment, (err, result) => {
      if (err) throw err;
      console.log('Appointment inséré avec l\'ID :', result.insertId);
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

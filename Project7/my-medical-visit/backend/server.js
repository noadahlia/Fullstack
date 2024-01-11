const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const db = require("./database");
const PORT = process.env.port || 3001;
const path = require('path');


app.get("/validate_doctor", (req, res) => {
  db.getAllDoctors()
    .then((result) => {
      let success = result.find(
        (doc) =>
          doc.doctor_name === req.query.username &&
          doc.doctor_phone === req.query.password
      );
      if (!success) {
        res.status(404);
        res.send(JSON.stringify("wrong username or password"));
      } else {
        res.status(200);
        res.send(JSON.stringify(success));
      }
    })
    .catch((err) => console.log(err));
});

app.get("/validate_patient", (req, res) => {
  db.getAllPatients()
    .then((result) => {
      let success = result.find(
        (doc) =>
          doc.patient_name === req.query.username &&
          doc.patient_phone === req.query.password
      );
      if (!success) {
        res.status(404);
        res.send(JSON.stringify("wrong username or password"));
      } else {
        res.status(200);
        res.send(JSON.stringify(success));
      }
    })
    .catch((err) => console.log(err));
});

app.get("/doctors/:id", (req, res) => {
  db.getDocInfos(req.params.id)
    .then((result) => {
      res.send(JSON.stringify(result[0]));
    })
    .catch((err) => console.log(err));
});
app.get("/patients/:id", (req, res) => {
  db.getPatInfos(req.params.id)
    .then((result) => {
      res.send(JSON.stringify(result[0]));
    })
    .catch((err) => console.log(err));
});

app.get("/doctor/:docId/apts", (req, res) => {
  db.getAptsByDoc(req.params.docId)
    .then((result) => {
      res.setHeader('Content-Type', 'application/json'); // Définir le type de contenu comme JSON
      res.send(JSON.stringify(result));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: 'Internal Server Error' });
    });
});

app.get("/patient/:patID/apts", (req, res) => {
  db.getAptsByPat(req.params.patID)
    .then((result) => {
      res.send(JSON.stringify(result));
    })
    .catch((err) => console.log(err));
});

app.post("/doctor/addAppointment", (req, res) => {
  const { docId, patId, date, startTime, duration, start } = req.body;
  //console.log("yaacov");
  if (!docId || !patId || !date || !startTime || !duration) {
    res.status(400).json({ error: "Input a value in all fields." });
    return;
  }
  console.log(date, '  ', startTime);
  // Appel de la fonction addApt pour insérer le rendez-vous dans la base de données
  db.addApt(docId, patId, date, startTime, duration, start)
    .then((result) => {
      res.status(201).json({ message: result });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Server internal error" });
    });
});

app.get("/patientsByDoctor/:docId", (req, res) => {
  const docId = req.params.docId;
  db.getPatientsByDoctor(docId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.delete('/appointment/:aptId', (req, res) => {
  const aptId = req.params.aptId;
  db.deleteApt(aptId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/patientDocuments/:patientId", (req, res) => {
  const patientId = req.params.patientId;
  db.getPatientDocuments(patientId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/pdf/:id', (req, res) => {
  const idDocument = req.params.id;
  const filePath = path.join(__dirname, '/db_scripts/documents/', `doc${idDocument}.pdf`);
  res.setHeader('Content-Type', 'application/pdf');

  //console.log(filePath)
  res.sendFile(filePath);
});

// server.js
app.put("/patients/:id", (req, res) => {
  const patientId = req.params.id;
  const updatedInfo = req.body;

  db.updatePatientInfo(patientId, updatedInfo)
    .then(() => {
      res.send("Patient information updated successfully.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

app.put("/doctors/:id", (req, res) => {
  const doctorId = req.params.id;
  const updatedInfo = req.body;

  db.updateDoctorInfo(doctorId, updatedInfo)
    .then(() => {
      res.send("Doctor information updated successfully.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
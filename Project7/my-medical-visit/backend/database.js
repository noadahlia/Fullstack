var mysql = require("mysql2");
const connectionInfo = require("./connectionInfo").connectionInfo;

var con = mysql.createConnection(connectionInfo);

exports.getAllDoctors = function () {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM doctor `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("1:Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.getAllPatients = function () {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM patient `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("1:Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.getDocInfos = function (docId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM doctor WHERE doctor_id=${docId} `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("2:Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};
exports.getPatInfos = function (patId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM patient WHERE patient_id=${patId} `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("2:Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.getAptsByDoc = function (docId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT start, appointment_duration, patient_name
    FROM appointment a
    JOIN patient p on a.patient_id = p.patient_id 
    WHERE doctor_id=${docId} `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("1:Error executing the query: " + error.stack);
        return;
      }
      resolve(results);
    });
  });
};

exports.getAptsByPat = function (patId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT appointment_id, appointment_show, start, doctor_name, doctor_address, speciality_name 
    FROM appointment a
    JOIN doctor d on d.doctor_id = a.doctor_id 
    JOIN speciality s on d.speciality_id = s.speciality_id
    WHERE patient_id=${patId} `;
    con.query(query, (error, results, fields) => {
      if (error) {
        reject("1:Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.addApt = function (docId, patId, date, startTime, duration, start) {
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO appointment (doctor_id, patient_id, appointment_date, appointment_start_time, appointment_duration, appointment_show, start) 
                 VALUES (${docId}, ${patId}, '${date}', '${startTime}', ${duration},'1', '${start}')`;

    con.query(query, (error, results, fields) => {
      if (error) {
        reject("Error executing the query: " + error.stack);
        return;
      }

      resolve("Appointment added successfully");
    });
  });
};

exports.getPatientsByDoctor = function (docId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT a.patient_id, p.patient_name FROM appointment a
                 JOIN patient p ON a.patient_id = p.patient_id
                 WHERE a.doctor_id = ${docId}
                 GROUP BY a.patient_id, p.patient_name`;

    con.query(query, (error, results, fields) => {
      if (error) {
        reject("Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.deleteApt = function (aptId) {
  return new Promise((resolve, reject) => {
    let query = `UPDATE appointment SET appointment_show = 0
                 WHERE appointment_id = ${aptId}`;

    con.query(query, (error, results, fields) => {
      if (error) {
        reject("Error executing the query: " + error.stack);
        return;
      }

      resolve("Appointment deleted successfully");
    });
  });
}

exports.getPatientDocuments = function (patientId) {
  return new Promise((resolve, reject) => {
    let query = `SELECT id_document, document_type, date_column FROM document
                 WHERE patient_id = ${patientId}
                 ORDER BY date_column DESC`;

    con.query(query, (error, results, fields) => {
      if (error) {
        reject("Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};

exports.updatePatientInfo = function (patientId, updatedInfo) {
  return new Promise((resolve, reject) => {
    let query = `UPDATE patient SET patient_name=?, patient_blood_type=?, patient_phone=?, patient_address=?, birth_date=? WHERE patient_id=?`;
    const values = [
      updatedInfo.name,
      updatedInfo.blood_type,
      updatedInfo.phone,
      updatedInfo.address,
      updatedInfo.birth_date,
      patientId,
    ];

    con.query(query, values, (error, results, fields) => {
      if (error) {
        reject("Error executing the query: " + error.stack);
        return;
      }

      resolve(results);
    });
  });
};






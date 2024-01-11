// NewAppointment.js

import React, { useState, useEffect } from "react";
import { useUser } from './UserContext';
import "../css/NewAppointment.css"; // Importez le fichier CSS
import moment from 'moment';


function NewAppointment() {
    const { user } = useUser();

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [duration, setDuration] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        // Charge la liste des patients lorsque le composant est monté
        // Utilise l'ID du médecin à partir du contexte utilisateur    
        loadPatients(user.id);
    }, [user.id]);

    const loadPatients = async (docId) => {
        try {
            const response = await fetch(`http://localhost:3001/patientsByDoctor/${docId}`);
            const data = await response.json();
            setPatients(data);
        } catch (error) {
            console.error("Error loading patients:", error);
        }
    };

    const handleCreateAppointment = async () => {
        // Appeler votre API pour créer le rendez-vous avec les données sélectionnées
        try {
            const response = await fetch("http://localhost:3001/doctor/addAppointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    docId: user.id,
                    patId: selectedPatient,
                    date,
                    startTime,
                    duration,
                    start: moment(date + startTime, 'YYYY-MM-DDLT').format('YYYY-MM-DD HH:mm:ss'),
                }),
            });

            const data = await response.json();
            // Vérifiez si la requête a réussi (status 200)
            if (response.status === 201) {
                // Affiche la boîte de dialogue
                setShowPopup(true);

                // Réinitialise les champs du formulaire
                setSelectedPatient("");
                setDate("");
                setStartTime("");
                setDuration("");

                // Définir l'état de succès à true
                setSuccess(true);

                // Utilisez setTimeout pour masquer la boîte de dialogue après quelques secondes
                setTimeout(() => {
                    setShowPopup(false);
                    setSuccess(false);
                }, 3000);
            } else {
                // Affiche la boîte de dialogue d'erreur
                setShowPopup(true);

                // Définir l'état de succès à false
                setSuccess(false);

                //console.error("Error creating appointment:", response.statusText);

                // Utilisez setTimeout pour masquer la boîte de dialogue d'erreur après quelques secondes
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);
            }
        } catch (error) {
            // Affiche la boîte de dialogue d'erreur en cas d'exception
            setShowPopup(true);

            // Définir l'état de succès à false
            setSuccess(false);

            //console.error("Error creating appointment:", error);

            // Utilisez setTimeout pour masquer la boîte de dialogue d'erreur après quelques secondes
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
    };
    return (
        <div className="new-appointment-container">
            <h3>Create a new appointment for a patient :</h3>
            <form>
                <label>
                    Patient:
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
                        <option value="">Select a patient</option>
                        {patients.map((patient) => (
                            <option key={patient.patient_id} value={patient.patient_id}>
                                {`${patient.patient_id} - ${patient.patient_name}`}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Start Time:
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </label>
                <br />
                <label>
                    Duration (in minutes):
                    <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleCreateAppointment}>
                    Create
                </button>
            </form>
            {/* Boîte de dialogue stylisée pour afficher le message de réussite ou d'erreur */}
            {showPopup && (
                <div className={`popup ${success ? "popup-success" : "popup-error"}`}>
                    <span className="popup-close" onClick={() => setShowPopup(false)}>
                        &times;
                    </span>
                    <p>{success ? "Appointment successfully added" : "Error creating appointment"}</p>
                </div>
            )}
        </div>
    );
}

export default NewAppointment;

import React, { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import Appointment from './Appointment';
import '../css/Appointment.css';
import moment from 'moment';

function PatientAppointments() {
    const { user } = useUser();
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        try {
          const response = await fetch(`http://localhost:3001/patient/${user.id}/apts`);
          if (response.ok) {
            const data = await response.json();
            setAppointments(data);
          } else {
            console.error('Failed to fetch appointments');
          }
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => {
      fetchAppointments(); // Fetch appointments when the component mounts
    }, [user]);

    const handleDeleteApt = (aptId) => {
      setAppointments((current) => current.filter((apt) => apt.appointment_id !== aptId));
    };

    return (
      <>
        {appointments &&
          appointments
            .sort((a, b) => a["start"] < b["start"] ? 1 : -1)
            .map(apt => {
              if (apt.appointment_show === 1){
                const adjustedStartTime = moment(apt.start).subtract(120, 'minutes');

                return (
                  <Appointment
                    key={apt.appointment_id} // Add the key prop here
                    id={apt.appointment_id}
                    doctor_name={apt.doctor_name}
                    date={moment(adjustedStartTime).format("DD/MM/YYYY")}
                    hour={moment(adjustedStartTime).format("HH:mm")}
                    doctor_address={apt.doctor_address}
                    speciality_name={apt.speciality_name}
                    delete={handleDeleteApt}
                  />
                );
              }
              
            })}
      </>
    );
    
}

export default PatientAppointments;
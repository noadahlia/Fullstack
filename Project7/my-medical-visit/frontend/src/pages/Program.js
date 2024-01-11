import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';
import { useUser } from './UserContext';

import 'react-big-calendar/lib/css/react-big-calendar.css';

function Program() {
  const localizer = momentLocalizer(moment);
  const viewOptions = ['week', 'day'];
  const { user } = useUser();

  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`http://localhost:3001/doctor/${user.id}/apts`); // Replace `docId` with the actual doctor ID
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const apts = data.map(apt => (
          {start : new Date(moment(apt.start).toDate() - 120*60*1000),
            end : new Date((moment(apt.start).toDate().getTime() + apt.appointment_duration*60*1000 - 120*60*1000)),
            title : apt.patient_name,
          }));
        setAppointments(apts);
          console.log(appointments);
      } else {
        console.error('Failed to fetch appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };


  useEffect(() => {
    fetchAppointments(); // Fetch appointments when the component mounts
  }, []);

  return (
    <div className="program">
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={viewOptions}
        defaultView="week"
        timeslots={1}
        step={15}
        min={new Date(0, 0, 0, 8, 0)}
        max={new Date(0, 0, 0, 18, 0)}
      />
    </div>
  );
}

export default Program;

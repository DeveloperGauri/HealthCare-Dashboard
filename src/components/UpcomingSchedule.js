import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = ({ schedules }) => {
    return (
        <div className="card upcoming-schedule-section">
            <div className="card-header">
                <h3>The Upcoming Schedule</h3>
            </div>
            <div>
                {schedules.map((group, index) => (
                    <div className="schedule-group" key={index}>
                        <h4>On {group.day}</h4>
                        <div className="schedule-appointments-flex">
                            {group.appointments.map((appt, apptIndex) => (
                                <SimpleAppointmentCard key={apptIndex} {...appt} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingSchedule;
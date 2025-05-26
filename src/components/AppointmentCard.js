// src/components/AppointmentCard.js

const AppointmentCard = ({ avatar, doctorName, specialty, dateTime }) => {
    return (
        <div className="appointment-item">
            <div className="avatar-small">
                <img src={avatar} alt={`${doctorName} Avatar`} />
            </div>
            <div className="info">
                <strong>{doctorName}</strong>
                <span>{specialty}</span>
            </div>
            <span className="date-time-label">{dateTime}</span>
        </div>
    );
};

export default AppointmentCard;
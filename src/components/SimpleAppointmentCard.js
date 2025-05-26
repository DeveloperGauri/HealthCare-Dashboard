const SimpleAppointmentCard = ({ title, time, icon }) => {
    return (
        <div className="simple-appointment-card">
            <div className="content">
                <strong>{title}</strong>
                <span>{time}</span>
            </div>
            {icon && <span className="icon-right icon-placeholder">{icon}</span>}
        </div>
    );
};

export default SimpleAppointmentCard;
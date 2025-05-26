import anatomyImage from '../assets/human-anatomy.png';

const HumanAnatomySection = ({ healthMetrics }) => {
    return (
        <div className="card anatomy-section">
            <div className="anatomy-image-container">
                <img src={anatomyImage} alt="Human Anatomy" />
                <span className="health-indicator-label healthy heart" style={{ top: '28%', left: '70%', transform: 'translate(-50%, -50%)' }}> ❤️Healthy Heart</span> 
                <span className="health-indicator-label healthy lungs" style={{ top: '70%', left: '30%', transform: 'translate(-50%, -50%)' }}> 🦵Healthy Leg</span>
                          </div>
            <div className="health-status-cards-container">
               
                {healthMetrics.map((metric) => ( 
                    <HealthStatusCard key={metric.id} {...metric} />
                ))}
            </div>
        </div>
    );
};

const HealthStatusCard = ({ icon, organ, date, percentage ,color}) => {
    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    return (
        <div className="health-status-card">
            <div className="icon-wrapper icon-placeholder">{icon}</div>
            <div className="details">
                <strong>{organ}</strong> 
                <div className="health-date-and-poll"> 
                    {formattedDate && <span className="health-date">{formattedDate}</span>} 
                    {percentage !== undefined && ( 
                        <div className="health-status-poll">
                            <div className="health-status-poll-bar-track">
                                <div className="health-status-poll-bar" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HumanAnatomySection;
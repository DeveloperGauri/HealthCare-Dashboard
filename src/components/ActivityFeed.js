import '../styles/components.css';

const ActivityFeed = ({ activityData, totalAppointments }) => {
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="card activity-feed-card">
            <div className="card-header">
                <h3>Activity</h3>
                <span className="chart-info">
                    {totalAppointments} appointment{totalAppointments !== 1 ? 's' : ''} on this week
                </span>
            </div>
            <div className="activity-chart-bars">
                {daysOfWeek.map((day, index) => (
                    <div className="activity-bar-group" key={index}>
                        {activityData[day] && activityData[day].map((bar, barIndex) => (
                            <div
                                key={barIndex}
                                className={`activity-bar ${bar.type === 'light' ? 'light' : 'dark'}`}
                                style={{ height: `${bar.height}%`, bottom: `${bar.offset}%` }}
                            ></div>
                        ))}
                        <span className="label">{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
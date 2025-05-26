import avatarImage from '../assets/avatar.png'; // Make sure you have an avatar image
import ActivityFeed from '../components/ActivityFeed';
import CalendarView from '../components/CalendarView';
import HumanAnatomySection from '../components/HumanAnatomySection';
import UpcomingSchedule from '../components/UpcomingSchedule';
import {
    activityData,
    anatomyHealthMetrics,
    calendarAppointmentDetails,
    upcomingScheduleData
} from '../data/dashboardData';
import Header from './Header';

const DashboardMainContent = () => {
    const totalAppointmentsThisWeek = calendarAppointmentDetails.length;

    return (
        <main className="dashboard-main-content">
            <div className="dashboard-left-column">
                <Header /> 
                <div className="main-header"> 
                    <h1>Dashboard</h1>
                    <div className="time-period-selector">This Week ▼</div>
                </div>
                <HumanAnatomySection healthMetrics={anatomyHealthMetrics} />
                <ActivityFeed
                    activityData={activityData} 
                    totalAppointments={totalAppointmentsThisWeek} 
                />
            </div>

            <div className="dashboard-right-column">
                <div className="user-profile-widget">
                    <div className="avatar">
                        <img src={avatarImage} alt="User Avatar" />
                    </div>
                    <div className="add-button">+</div>
                </div>
                <CalendarView />
                <UpcomingSchedule schedules={upcomingScheduleData} />
            </div>
        </main>
    );
};

export default DashboardMainContent;
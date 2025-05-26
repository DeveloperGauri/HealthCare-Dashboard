import { useState } from 'react';
import { calendarAppointmentDetails, calendarDays } from '../data/dashboardData';

const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(26);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:00'); 

    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const handleTimeSlotClick = (date, time) => {
        setSelectedDate(date);
        setSelectedTimeSlot(time);
    };

    return (
        <div className="card calendar-view-card">
            <div className="calendar-header-nav">
                <h3 className="month-name">October 2021</h3>
                <div className="nav-buttons">
                    <button>&larr;</button>
                    <button>&rarr;</button>
                 </div>
            </div>

            <div className="calendar-grid">
                {daysOfWeek.map(day => (
                    <div key={day} className="calendar-day-name">{day}</div>
                ))}
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`
                            calendar-date-cell
                            ${day.month === 'current' ? '' : 'inactive'}
                            ${selectedDate === day.date && day.month === 'current' ? 'selected' : ''}
                        `}
                    >
                        <span className="date-number">{day.date}</span>
                        {day.timeSlots && day.timeSlots.length > 0 && (
                            <div className="time-slots-for-day">
                                {day.timeSlots.map((slot, slotIndex) => (
                                    <span
                                        key={slotIndex}
                                        className={`
                                            time-label
                                            ${slot.booked ? 'booked' : ''}
                                            ${selectedDate === day.date && selectedTimeSlot === slot.time && day.month === 'current' ? 'selected-slot' : ''}
                                        `}
                                        onClick={() => day.month === 'current' && !slot.booked && handleTimeSlotClick(day.date, slot.time)}
                                    >
                                        {slot.time}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            
            <div className="appointment-details-grid">
                {calendarAppointmentDetails.map((appt, index) => (
                    <div key={index} className={`appointment-detail-card ${index % 2 === 0 ? '' : 'secondary-grey'}`}>
                        <div className="icon-left icon-placeholder">{appt.icon}</div>
                        <div className="details">
                            <strong>{appt.type}</strong>
                            <span>{appt.timeRange}</span>
                            <span>{appt.doctorName}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;
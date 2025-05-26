export const calendarAppointmentDetails = [
    { icon: '🦷', type: 'Dentist', timeRange: '09:00-11:00', doctorName: 'Dr. Cameron Williamson' },
    { icon: '🏋️', type: 'Physiotherapy Appointment', timeRange: '11:30-12:00', doctorName: 'Dr. Kevin Djones' },
];
 

export const calendarDays = [
    { date: 24, month: 'current', timeSlots: [{ time: '09:00', booked: false }, { time: '10:00', booked: false }] }, 
    { date: 25, month: 'current', timeSlots: [{ time: '10:00', booked: false }, { time: '11:00', booked: false }]},
    { date: 26, month: 'current', timeSlots: [{ time: '08:00', booked: false }, { time: '09:00', booked: true }] }, 
    { date: 27, month: 'current', timeSlots: [{ time: '10:00', booked: false }, { time: '11:00', booked: true }] }, 
    { date: 28, month: 'current', timeSlots: [{ time: '11:00', booked: false }, { time: '14:00', booked: false }] }, 
    { date: 29, month: 'current', timeSlots: [{ time: '12:00', booked: true }, { time: '09:00', booked: false }] }, 
    { date: 30, month: 'current', timeSlots: [{ time: '09:00', booked: true }, { time: '10:00', booked: false }] }, 
   
];


export const anatomyHealthMetrics = [
  { id: 2, organ: 'Lungs', percentage: 70, color: 'var(--accent-red)', icon: '🫁', date: 'Dec 26 2021' },
  { id: 3, organ: 'Teeth',  percentage: 80, color: 'var(--accent-green)', icon: '🦷', date: 'Nov 24 2021' },
  { id: 4, organ: 'Bone',  percentage: 60, color: 'var(--accent-orange)', icon: '🦴', date: 'Jan 24 2022' },
];
export const activityData = {
    Mon: [
      { type: 'light', height: 40, offset: 0 },
      { type: 'dark', height: 30, offset: 30 },
    ],
    Tues: [
      { type: 'dark', height: 50, offset: 0 },
      { type: 'light', height: 60, offset: 20 },
    ],
    Wed: [
      { type: 'light', height: 30, offset: 0 },
      { type: 'dark', height: 40, offset: 10 },
    ],
    Thurs: [
      { type: 'dark', height: 60, offset: 0 },
      { type: 'light', height: 50, offset: 20 },
    ],
    Fri: [
      { type: 'light', height: 70, offset: 0 },
      { type: 'dark', height: 50, offset: 10 },
    ],
    Sat: [
      { type: 'dark', height: 30, offset: 0 },
      { type: 'light', height: 20, offset: 10 },
    ],
    Sun: [
      { type: 'light', height: 40, offset: 0 },
      { type: 'dark', height: 30, offset: 10 },
    ],
};

export const upcomingScheduleData = [
    {
        day: 'Thursday',
        appointments: [
            { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: '📋' },
            { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
        ],
    },
    {
        day: 'Saturday',
        appointments: [
            { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
            { id: 4, title: 'Neurologist', time: '16:00 PM', icon: '🧠' },
        ],
    },
    
];


export const mainNavLinks  = [
    { name: 'Dashboard', icon: '🏠', active: true },
    { name: 'Appointments', icon: '📅' },
    { name: 'Messages', icon: '✉️' },
    { name: 'Doctors', icon: '👨‍⚕️' },
    { name: 'Departments', icon: '🏥' }
];
export const bottomNavLinks = [
    { name: 'Settings', icon: '⚙️' }
];
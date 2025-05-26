// src/App.js
import DashboardMainContent from './layouts/DashboardMainContent';
import Sidebar from './layouts/Sidebar';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <DashboardMainContent />
        </div>
    );
}

export default App;
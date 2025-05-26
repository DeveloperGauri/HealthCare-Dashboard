import NavigationLink from '../components/NavigationLink';
import { bottomNavLinks, mainNavLinks } from '../data/dashboardData';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="app-logo">
                <span className="logo-health">Health</span><span className="logo-care">care.</span>
            </div>
            <nav className="main-nav-section"> 
                <h4>General</h4>
                <ul className="nav-list top-links"> 
                    {mainNavLinks.map((link, index) => (
                        <NavigationLink key={index} {...link} />
                    ))}
                </ul>
            </nav>
            <div className="sidebar-spacer"></div>
            <nav className="bottom-nav-section"> 
                <ul className="nav-list bottom-links"> 
                    {bottomNavLinks.map((link, index) => (
                        <NavigationLink key={index} {...link} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
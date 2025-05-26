const NavigationLink = ({ icon, name, active }) => {
    return (
        <li className="mb-sm">
            <a href="" className={`nav-link ${active ? 'active' : ''}`}>
                <span className="icon icon-placeholder">{icon}</span>
                <span>{name}</span>
            </a>
        </li>
    );
};

export default NavigationLink;
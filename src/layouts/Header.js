const Header = () => {
    return (
        <div className="flex-between mb-xl"> 
            <div className="search-bar">
                <span className="icon icon-placeholder">🔍</span> 
                <input type="text" placeholder="Search" />
            </div>
            <div className="flex-center">
                <span className="icon notification-icon icon-placeholder">🔔</span> 
            </div>
        </div>
    );
};

export default Header;
import './Left.css'
import gamerpic from '../assets/gamerpic.jpg';

function Left() {
    return (
        <div className="left-main">
            <div className="left-top">
                <div className="left-menu-items gamertag">
                    <img src={gamerpic}></img>
                    <p>bmahto</p>
                </div>
                {/* Top Section */}
                <div className="left-menu-items">
                    <div className="menu-items">
                        Games
                    </div>
                    <div className="menu-items">
                        Apps
                    </div>
                    <div className="menu-items">
                        Groups
                    </div>
                </div>
                {/* Horizontal Rule */}
                <div className="left-rule">
                    <hr></hr>
                </div>
                {/* Bottom Section */}
                <div className="left-menu-items">
                    <div className="menu-items">
                        Full Library
                    </div>
                    <div className="menu-items">
                        Manage
                    </div>
                </div>
            </div>
            <div className="left-bottom">
                <div className="left-menu-items storage">
                    All Storage
                </div>
            </div>
        </div>
    )
}

export default Left;
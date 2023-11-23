import './Left.css'
import gamerpic from '../assets/gamerpic.jpg';
import console from '../assets/console.png';
import app from '../assets/app.png';
import briefcase from '../assets/briefcase.png';
import library from '../assets/library.png';
import group from '../assets/group.png'


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
                        <img src={console} className="icons"></img> 
                        Games
                    </div>
                    <div className="menu-items">
                        <img src={app} className="icons"></img>
                        Apps
                    </div>
                    <div className="menu-items">
                    <img src={group} className="icons"></img> 
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
                        <img src={library} className="icons"></img> 
                        Full Library
                    </div>
                    <div className="menu-items">
                        <img src={briefcase} className="icons"></img> 
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
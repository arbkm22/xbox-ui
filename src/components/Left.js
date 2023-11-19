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
                <div className="left-menu-items">
                    Games
                </div>
                <div className="left-menu-items">
                    Apps
                </div>
                <div className="left-menu-items">
                    Groups
                </div>
                <div className="left-rule">
                    <hr></hr>
                </div>
                <div className="left-menu-items">
                    Full Library
                </div>
                <div className="left-menu-items">
                    Manage
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
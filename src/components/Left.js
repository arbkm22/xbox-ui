import './Left.css'
import gamerpic from '../assets/gamerpic.jpg';
import console from '../assets/console.png';
import app from '../assets/app.png';
import briefcase from '../assets/briefcase.png';
import library from '../assets/library.png';
import group from '../assets/group.png'


function Left() {
    return (
        <div className="left-side">
            <div className="gamertag left-icons">
                <img src={gamerpic} alt="gamerpic"></img>
                <p className="left-text">bmahto</p>
            </div>
            <div className="menu-items">
                <div className="menu-item-content">
                    <img src={console} className="icons" alt="icnon"></img>
                    <p className="left-text">Games</p>
                </div>
                    <p className="right-num">34</p>
            </div>
            <div className="menu-items">
                <div className="menu-item-content">
                    <img src={app} className="icons" alt="icnon"></img>
                    <p className="left-text">Apps</p>
                </div>
                <p className="right-num">19</p>
            </div>
            <div className="menu-items">
                <div className="menu-item-content">
                    <img src={group} className="icons" alt="icnon"></img>
                    <p className="left-text">Groups</p>
                </div>
                <p className="right-num">2</p>
            </div>
            <hr className="left-hr"></hr>
            <div className="menu-items">
                <img src={library} className="icons" alt="icnon"></img>
                <p className="left-text">Full Library</p>

            </div>
            <div className="menu-items">
                <img src={briefcase} className="icons" alt="icnon"></img>
                <p className="left-text">Manage</p>

            </div>
        </div>
    )
}

export default Left;
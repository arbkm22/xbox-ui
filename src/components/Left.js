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
                <img src={gamerpic}></img>
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

// function temp() {
//     <div className="left-main">
//             <div className="left-top">
//                 <div className="left-menu-items gamertag">
//                     <img src={gamerpic}></img>
//                     <p>bmahto</p>
//                 </div>
//                 {/* Top Section */}
//                 <div className="left-menu-items">
//                     <div className="menu-items">
//                         <img src={console} className="icons"></img> 
//                         Games
//                         <p className="attr"> 34 </p>
//                     </div>
//                     <div className="menu-items">
//                         <img src={app} className="icons"></img>
//                         Apps
//                         <p className="attr"> 34 </p>
//                     </div>
//                     <div className="menu-items">
//                     <img src={group} className="icons"></img> 
//                         Groups
//                         <p className="attr"> 34 </p>
//                     </div>
//                 </div>
//                 {/* Horizontal Rule */}
//                 <div className="left-rule">
//                     <hr></hr>
//                 </div>
//                 {/* Bottom Section */}
//                 <div className="left-menu-items">
//                     <div className="menu-items">
//                         <img src={library} className="icons"></img> 
//                         Full Library
//                     </div>
//                     <div className="menu-items">
//                         <img src={briefcase} className="icons"></img> 
//                         Manage
//                     </div>
//                 </div>
//             </div>
//             <div className="left-bottom">
//                 <div className="left-menu-items storage">
//                     All Storage
//                 </div>
//             </div>
//         </div>
// }
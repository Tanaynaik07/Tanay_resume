import React from 'react';
import '../styles/AnimatedIcon.css'; // Ensure this CSS file exists and contains the styles

const AnimatedIcon = ({ href, icon, tooltipText, name }) => {
    return (
        <div className="tooltip-container">
            <div className="tooltip">
                <div className="profile">
                    <div className="user">
                        <div className="img">{icon}</div>
                        <div className="details">
                            <div className="name">{name}</div>
                            <div className="username">@username</div>
                        </div>
                    </div>
                    <div className="about">500+ Friends</div>
                </div>
            </div>
            <div className="text">
                <a className="icon" href={href} target="_blank" rel="noopener noreferrer">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="facebookSVG">{icon}</span>
                    </div>
                    <div className="text">{tooltipText}</div>
                </a>
            </div>
        </div>
    );
};

export default AnimatedIcon;

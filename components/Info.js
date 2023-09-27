import React from "react";


export default function Info(){
     return (
        <div className="info-container">
            <img className="img-info" src="../images/foto-cv.jpeg" />
            <h2>Rochelyn Rallestan</h2>
            <p className="title">Frontend Developer</p>
            <p className="email">rochelyn-rallestan.website</p>
            <div className="info-btn">
                <button className="mail-btn">
                    <img src="../images/mail-icon.png"/>
                    <span>Email</span>
                </button>
                <button className="linkedin-btn">
                    <img src="../images/linkedin-icon.png"/>
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
        )
}
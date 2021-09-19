import React from 'react'
import './About.css'
import TeamMembers from './TeamMembers';



function About() {
   

    return (
        <div className="row" id="about-section">
            <div className="col-12 col-lg-6">
                <div className="container-about">
                    <div className="title-about">About us</div>
                    <p className="para-about">(Company description) A rich text element can be used with static or dynamic content. For static content, just drop the element into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>     
                    <div className="title-team">Our Team</div>
                   <TeamMembers/>
                   <div className="title-team">Our Mentors</div>
              
                </div>
               
            </div>
            
        </div>
    

);
}

export default About
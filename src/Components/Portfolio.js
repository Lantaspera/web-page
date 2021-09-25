import React from 'react'
import './Portfolio.css'


function Portfolio() {
    return (
        <div className="portfolio-section" id="portfolio-section">
             <img src="/images/qmark.png" className="qmark-img"/>
            <h2 className="title-port ">Real expirience with the </h2>
            <h2 className="title-port2 ">Real stories of our customers</h2>
            <p className="title-subp">we are gland to share the expirience of our succesfull condributions</p>
           
            <div className="logo-port">
                <div className="port-image">
                <img src="/images/rdionz.jpg" className="rdionz-img"/>
                </div >
                <img src="/images/qutaion mark2.jpg" className="mark-img"/>
                <div className="radio-para">
                    <p className="radio-paragf">To start my startup landing page design quickly, I was searching for a  developer comunity . Lantaspera is one of the best webpage developers I have come across. Its so flexible, well organised and creative.</p>
                </div>
               <div className="rdio-div">
                   <h1 className="rdio-det">Dr.Nabeel M Naasar</h1>
                   <p className="rdio-dis">Co-Founder -Rdionz Biomobility</p>
               </div>
            </div>

            

            <div className="logo-port">
                <div className="port-image">
                <img src="/images/logo3.png" className="tortis-img"/>
                </div >
                <img src="/images/qutaion mark2.jpg" className="mark-img2"/>
                <div className="radio-para">
                    <p className="radio-paragf">Doing buisness with Lantaspera is very convenient,their quality of work and time management is excellent.More over the ui they created was very nice.We would like to do more buisness with Lantaspera</p>
                </div>
               <div className="rdio-div">
                   <h1 className="rdio-det">Dr.Agney Sadanand </h1>
                   <p className="rdio-dis">Founder - Tortis</p>
               </div>
            </div>
            
            <div className="logo-port">
                <div className="port-image">
                <img src="/images/voyiget logo.jpg" className="voyiget-img"/>
                </div >
                <img src="/images/qutaion mark2.jpg" className="mark-img3"/>
                <div className="radio-para">
                    <p className="radio-paragf">voyiget is a home automation startup in calicut.Some of my students own this venture.At its budding stage it was very difficult to make a good mobile application at low budget.Lantaspera was the right choise they made</p>
                </div>
               <div className="rdio-div">
                   <h1 className="rdio-det">Asst.Pro Paul Mathew</h1>
                   <p className="rdio-dis">Director -Voyget  </p>
               </div>
            </div>
           
        
        </div>
    )
}

export default Portfolio

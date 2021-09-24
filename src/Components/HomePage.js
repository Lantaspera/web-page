import React from 'react'


import ImageFront from './ImageFront'
import Portfolio from './Portfolio'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import FooterSect from './FooterSect'
import TeamMembers from './TeamMembers';




function HomePage() {
    return (
        <div>
            
           
                <div className="row">
                    <div className="col-12 col-lg-6">
                    
                        <ImageFront/>
                       <Services/>
                       <Portfolio/>
                       <About/>
                       <TeamMembers/>
                       <Contact/>
                       <FooterSect/>

                            </div> 

                        </div>
                </div>
    
    )
}

export default HomePage

import React from 'react'


import ImageFront from './ImageFront'
import Portfolio from './Portfolio'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Footer from './FooterSect'
import FooterSect from './FooterSect'





function HomePage() {
    return (
        <div>
            
           
                <div className="row">
                    <div className="col-12 col-lg-6">
                    
                        <ImageFront/>
                       <Services/>
                       {/* <Portfolio/> */}
                       <About/>
                       <Contact/>
                       <FooterSect/>

                            </div> 

                        </div>
                </div>
    
    )
}

export default HomePage

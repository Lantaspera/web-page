import React from 'react'
import './Portfolio.css'
import ImagePort from './ImagePort'

function Portfolio() {
    return (
        <div className="row" id="portfolio-section">
            <div className="col-12 col-lg-6">
            <h2 className="title-port "> Portfolio</h2>
            <div className="lab-port">What we have done so far</div>
            <div className="container-port">
            
            <ImagePort/>
            
            
            {/* <h2 className="label-port">Testimonial</h2> */}
            </div>
            </div>
            
        </div>
    )
}

export default Portfolio

import React from 'react'
import './Portfolio.css'
import ImagePort from './ImagePort'

function Portfolio() {
    return (
        <div className="row">
            <div className="col-12 col-lg-6">
            <h2 className="title-port"> portfolio</h2>
            <div className="container-port">
            <div className="lab-port">What we have done so far</div>
            <ImagePort/>
            
            
            {/* <h2 className="label-port">Testimonial</h2> */}
            </div>
            </div>
            
        </div>
    )
}

export default Portfolio

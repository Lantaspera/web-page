import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function ImagePort() {
    

    return (
        <div className="car">
            <Carousel autoPlay>
        <div>
            <img alt="" src="/Assets/image/main.jpg" />
        </div>
        <div>
            <img alt="" src="/Assets/image/mainf.jpg" />
        </div>
        <div>
            <img alt="" src="/Assets/image/mainm.jpg" />
        </div>
    </Carousel>
            
        </div>
    )
}

export default ImagePort

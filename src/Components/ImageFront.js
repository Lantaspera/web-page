import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './ImageFront.css'

 import React from 'react'
 import Navbar from './navbar'

const fadeImages = [
    '/images/image-1.jpg',
    '/images/image-5.jpg',
    '/images/image-3.jpg',
    '/images/image-4.jpg'
    
  ];
  
  var ReactRotatingText = require('react-rotating-text');
  

    function ImageFront() {
     
    return (
        <div className="row" id="home-section">
                    <div className="col-12 col-lg-6">
        
      <div   style={{
        height: '100vh',
        width: '100vw',
        
        backgroundSize: 'cover',
        zIndex:'-1'
        
   }}>
       <Navbar/>
    
    <Fade  duration= {1200}
    transitionDuration= {2500}
    infinite= {true}
    arrows={false} >
        
          <div className="each-fade">
            <img style={{
        height: '100vh',
        width: '100vw',
        
        backgroundSize: 'cover' }} src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img style={{
        height: '100vh',
        width: '100vw',
        
        backgroundSize: 'cover' }}src={fadeImages[1]} />
          </div>
          <div className="each-fade">
            <img style={{
        height: '100vh',
        width: '100vw',
        
        backgroundSize: 'cover' }} src={fadeImages[2]} />
          </div>
          <div className="each-fade">
            <img style={{
        height: '100vh',
        width: '100vw',
        
        backgroundSize: 'cover' }} src={fadeImages[3]} />
          </div>
          
          
        </Fade>
        <div className="home-welcome">
          <div className="bg-welcome" >
          <div className="home-welcome1"><ReactRotatingText   color={"white"} 
          items={['Welcome to Lantaspera', 'The iconic symbol of tech', 'Join with us']} /></div>
          <p class="caption-welcome"  >We are dedicated to provide the latest cutting edge technology solutions to our Clients and Organizations Across varied Industry domains.</p>
          <button className="btn-image" >Lets get started</button>
          </div>
          </div>
          
        </div>
        
        
                       
        
      </div>
      </div>
  
      
    );
  }
  export default ImageFront


















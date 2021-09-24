import React from 'react'
import './team.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function TeamMembers() {
    
   
    

    
    return (
        
        <div className="team-section">
        
        <h1 className="heading-team">Our Team</h1>

            <Carousel width={2000} showArrows={false} showStatus={false} showThumbs={false} axis={"horizontal"} autoPlay={true} 
                    swipeable={true} autoFocus={true}
                    interval={2500} infiniteLoop autoFocus centerMode centerSlidePercentage={35} showIndicators={false}>


              <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://avatars.githubusercontent.com/u/84629891?v=4" class="profile-img"/>
                  </div>
                  <div className="profile-details">
                      <h3 className="profile-details1" >Akshay Nambiar PV </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CEO</h5>
                      
                  </div>
           
              </div>

              <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://avatars.githubusercontent.com/u/48583694?v=4" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Azhar Ali Kalarikal </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CTO</h5>
                     
                  </div>
               </div>

               <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://ca.slack-edge.com/T0246ARE8UT-U024DHJ8KRC-26b8dc94c171-72" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Abdul Basith C </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CAO</h5>
                     
                  </div>
               </div>

               <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://ca.slack-edge.com/T0246ARE8UT-U0255ERTF0V-a40de1056f78-512" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Donna Susan Samuel  </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CIO</h5>
                     
                  </div>
               </div>

               
               <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://avatars.githubusercontent.com/u/88938045?v=4" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Anusha Surendran </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CFO</h5>
                     
                  </div>
               </div>

               <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://ca.slack-edge.com/T0246ARE8UT-U024JU31P41-ebfa930c4b2a-72" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Gagana Karpurachalil </h3>
                      <h5 className="profile-details2">Co-Founder</h5>
                      <h5 className="profile-details2">CDO</h5>
                      
                  </div>
               </div>

               <div className="profiles">
                  <div className="pro-pic">
                    <img src="https://avatars.githubusercontent.com/u/85632108?v=4" class="profile-img"/>
                  </div>

                  <div className="profile-details">
                      <h3 className="profile-details1" >Adrid Sadanand p </h3>
                      <h5 className="profile-details2">Founder</h5>
                      <h5 className="profile-details2">COO</h5>
                      
                  </div>
               </div>

           </Carousel>  
          </div>
      
    
    )
}

export default TeamMembers
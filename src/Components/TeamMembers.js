import React from 'react'
import './team.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function TeamMembers() {
    
   
    

    
    return (
        
                    <div className="team-div">
                    
                    <Carousel width={1000} showArrows={false} showStatus={false} showThumbs={false} axis={"horizontal"} autoPlay={true} 
                    swipeable={true} autoFocus={true}
                    interval={2500} infiniteLoop autoFocus centerMode centerSlidePercentage={25} >

                    
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-2.jpg" />
                        <h4 className="name-about">Akshay Nambiar PV</h4>
                        <h3 className="post-about">CEO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-3.jpg" />
                        <h4 className="name-about">Azhar Kalarickal</h4>
                        <h3 className="post-about">CTO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-4.jpg" />
                        <h4 className="name-about">Abdul Basith C</h4>
                        <h3 className="post-about">CTO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-5.jpg" />
                        <h4 className="name-about"> Anusha Surendran</h4>
                        <h3 className="post-about">CFO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-6.jpg" />
                        <h4 className="name-about">Donna Susan Samuel</h4>
                        <h3 className="post-about">CIO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/image-1.jpg" />
                        <h4 className="name-about">Gagana</h4>
                        <h3 className="post-about">CDO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-1.jpeg" />
                        <h4 className="name-about">Adrid Sadanand P</h4>
                        <h3 className="post-about">COO</h3>
                        <h3 className="post-about">Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-2.jpg" />
                        <h4 className="name-about">Akshay Nambiar PV</h4>
                        <h3 className="post-about">CEO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-3.jpg" />
                        <h4 className="name-about">Azhar Kalarickal</h4>
                        <h3 className="post-about">CTO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-4.jpg" />
                        <h4 className="name-about">Abdul Basith C</h4>
                        <h3 className="post-about">CTO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-5.jpg" />
                        <h4 className="name-about"> Anusha Surendran</h4>
                        <h3 className="post-about">CFO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-6.jpg" />
                        <h4 className="name-about">Donna Susan Samuel</h4>
                        <h3 className="post-about">CIO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/image-1.jpg" />
                        <h4 className="name-about">Gagana</h4>
                        <h3 className="post-about">CDO</h3>
                        <h3 className="post-about">Co-Founter</h3>
                    </div>
                    <div className="team-container">
                        <img  className="dp-about" alt="dp-about" src="/images/img-1.jpeg" />
                        <h4 className="name-about">Adrid Sadanand P</h4>
                        <h3 className="post-about">COO</h3>
                        <h3 className="post-about">Founter</h3>
                    </div>
                    </Carousel>  
                    
                
        
            
                             
                </div>
    
    )
}

export default TeamMembers
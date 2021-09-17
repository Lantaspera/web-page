import React, {useState} from 'react'
import './Services.css'
function Services() {
    const [data,setData] = useState([{id:1,title:"Web Development", feedpic: "/images/img-1.jpeg"},
    {id:2, title:"Web Design", feedpic:"/images/img-2.jpg"},
    {id:3, title:"App Development", feedpic:"/images/img-3.jpg"},
    {id:4, title:"Graphic Design",feedpic:"/images/img-4.jpg"},
    {id:5, title:"Digital Marketing", feedpic:"/images/img-5.jpg"},
    {id:6, title:"Social Media Campaign", feedpic:"/images/img-6.jpg"}]);
    return (
       
        <div className="row">
        <div className="col-12 col-lg-6">
            <h2 className="title-service">Services</h2>
            <div className="container-card">
            <div className="lab-service">what be provide for you</div>
            
            {data.map((data)=>(
            <div className="card" key={data.id}>  
            <h3 className="title-feed">{data.title} </h3>
            <img className="img-feed"  src={data.feedpic} alt="img-feed" />        
            </div>
            ))}
           
            </div>    
        </div>
        </div>
        
    )
}
export default Services

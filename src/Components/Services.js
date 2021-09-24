import React, {useState} from 'react'
import './Services.css'

function Services() {
     return (
         <div className="service-section" id="services-section">
             <div>
             <h1 className="service-title">Services</h1>
             <p className="lab-port">What we provide for our customers</p>
                
             </div>
            

             <div className="webdevelop-section">
             <table>
                     <tbody>
                         <tr>
                            <td>
                                <img className="webdevelop-image" src="/images/img-1.jpeg"/>
                             </td>
                             <td>
                                <p className="webdevelop-title">Web Development </p>
                                <p className="webdevelop-content">Web development is the work involved in developing a website for the internet. It includes aspects such as web design, web publishing, web programming, and database management. </p> 
                             </td>
                             
                         </tr>
                     </tbody>
                 </table> 
             </div>
             <div className="webdesign-section">
                 <table>
                     <tbody>
                         <tr>
                             
                             <td>
                                 <p className="webdesign-title">Web Design</p>
                                 <p className="webdesign-content">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers. Web design also includes web apps, mobile apps, and user interface design.</p>
                             </td>
                             <td>
                                <img className="webdesign-image" src="/images/img-2.jpg"/>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div className="appdevelop-section">
                 <table>
                     <tbody>
                         <tr>
                            <td>
                                <img className="webdevelop-image" src="/images/img-3.jpg"/>
                             </td>
                             <td>
                                <p className="webdevelop-title">App Development </p>
                                <p className="webdevelop-content"> App development is the process by which software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing to provide an "application-like" experience within a Web browser.</p> 
                             </td>
                             
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div className="graphicdesign-section">
             <table>
                     <tbody>
                         <tr>
                             <td>
                                 <p className="webdesign-title">Graphic Design</p>
                                 <p className="webdesign-content">Graphic Design is the process of creating visual content to communicate information/ messages to the masses. Considered to be a sub-set of Communication Design, Graphic Design is used to create visual content using elements such as photographs, colours, typography, illustrations, and icons.</p>
                             </td>
                             <td>
                                <img className="webdesign-image" src="/images/img-4.jpg"/>
                             </td>
                         </tr>
                     </tbody>
                 </table> 
             </div>
             <div className="digitalmarket-sec">
             <table>
                     <tbody>
                         <tr>
                            <td>
                                <img className="webdevelop-image" src="/images/img-5.jpg"/>
                             </td>
                             <td>
                                <p className="webdevelop-title">Digital Market</p>
                                <p className="webdevelop-content">Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.</p> 
                             </td>
                             
                         </tr>
                     </tbody>
                 </table> 
             </div>
             <div className="social-section">
             <table>
                     <tbody>
                         <tr>
                             <td>
                                 <p className="webdesign-title">Social Media Campaign</p>
                                 <p className="webdesign-content">A Social Media Campaign is a coordinated marketing effort that is reinforced for the attainment of the business goal using one or more social media platforms.It is an organized marketing effort to increase consumer awareness, interest, and loyalty to an organization, brand, product, or service, through social media channels.</p>
                             </td>
                             <td>
                                <img className="webdesign-image" src="/images/img-6.jpg"/>
                             </td>
                         </tr>
                     </tbody>
                 </table> 
             </div>
         </div>
        
    )
}
export default Services

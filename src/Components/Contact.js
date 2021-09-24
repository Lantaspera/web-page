import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className="row">
        <div className="col-12 col-lg-6">
        <div className="container-contact" id="contact-section">
        <div className="form">
            <p className="title-contact ">Contact form</p>
            <p className="para-contact">Drop a message !</p>
            <p className="para1-contact">Fields marked with an asterisk (*) are required.</p>
            <form>
                <div className="form-container ">
                <table className="hai">
                    <tbody>
                        <tr >
                            <td>
                                <div className="text-contact">First name*</div>
                            </td>
                            <td className="colm-contact">
                            <div className="text-contact">Last name*</div>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <input className="box-contact " type="text" />
                            </td>
                            <td className="colm-contact">
                                <input className="box-contact" type="text" />
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <div className="text-contact">Email*</div>
                            </td>
                            <td className="colm-contact">
                            <div className="text-contact">Phone number</div>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <input className="box-contact" type="text" />
                            </td>
                            <td className="colm-contact" >
                                <input className="box-contact" type="text" />
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
                <br/>
                <div className="message-text">
                <div className="text-contact">Message</div>
                
                <textarea className="message-box" type="text" />
                <div>
                </div>
                <button className="btn-contact">Submit</button>
                </div>
            </div>
            </form>
            </div>
                <div className="adress">
                    <p className="getin">Get In Touch</p>
                    <p className="con-adress">info@lantespera.com <br/> +91-987654321</p>
                </div>
            </div> 
        </div>
        </div>
    )
}
export default Contact
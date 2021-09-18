import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="row">
        <div className="col-12 col-lg-6">
        <div className="container-contact" id="contact-section">
            <h3 className="title-contact text-center">Contact form</h3>
            <p className="para-contact">If you'd like to work together on a new project or have any questions then please get in touch - We'd love to hear from you!</p>
            <p className="para1-contact">Fields marked with an asterisk (*) are required.</p>
            <form>
                <div className="form-container ">
                <table>
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
                <div className="text-contact">Message</div>
                
                <input className="message-box" type="text" />
                <div>
                <button className="btn-contact">Submit</button>
                </div>
            </div>
            </form>
            </div>
            
        </div>
        </div>
    )
}

export default Contact

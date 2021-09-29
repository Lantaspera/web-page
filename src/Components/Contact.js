import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './Contact.css'
function Contact() {
    return (
        <Row>
            
               
                    <Col xs={12} lg={8} className="form">
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
                                <br />
                                <div className="message-text">
                                    <div className="text-contact">Message</div>

                                    <textarea className="message-box" type="text" />
                                    <div>
                                    </div>
                                    <button className="btn-contact">Submit Message</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col xs={12} lg={4} className="adress">
                        <p className="getin">Get In Touch</p>
                        <p className="con-adress">www.lantespera.com </p><br />
                        <p className="getin2">Follow Us In</p>
                        <p className="con-adress2">facebook<br />instagram<br />youtube </p>
                    </Col>
                
            
        </Row>
    )
}
export default Contact

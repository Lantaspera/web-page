import React from 'react'
import './footer.css'

function FooterSect() {
    return (
        <div className="row">
        <div className="col-12 col-lg-6">
        <div className="container-footer">
            <div className="image-sect">
                <img />
            </div>
            <div className="table-footer">
                <table>
                <tbody>
                    <tr>
                        <td >
                    <div className="first-row">    Services </div>
                        </td>
                        <td className="colm2">
                     <div className="first-row">   About</div>
                        </td>
                        <td className="colm3">
                     <div className="first-row">   Help</div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                    <div className="rows">    Campaigns</div>
                        </td>
                        <td className="colm2">
                     <div  className="rows">   Benefits</div>
                        </td>
                        <td className="colm3">
                     <div  className="rows">   FAQs</div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                    <div  className="rows">    Web app developments </div>
                        </td>
                        <td className="colm2">
                     <div  className="rows">  Team</div>
                        </td>
                        <td className="colm3">
                     <div  className="rows">   Contact Us</div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                    <div  className="rows">    Text Link </div>
                        </td>
                        <td className="colm2">
                     <div  className="rows">   Careers</div>
                        </td>
                        </tr>
                        <tr>
                        <td >
                     <div  className="rows">   Branding</div>
                        </td>
                        </tr>
                    
                </tbody>

            </table>
</div>
<div className="copyryt">Copyright © 2021 Lantaspera technologies. All rights reserved.</div>
            </div>
            
        </div>
        </div>
    )
}

export default FooterSect

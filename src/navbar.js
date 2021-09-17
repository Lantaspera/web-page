import React, {useState} from 'react'
import './navbar.css'


const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="img-bg">
         <div style={{position: 'absolute',
         padding : '5rem 0',
         marginTop:'2rem',
               width: '99vw',
               height: '90px',opacity: '0.44',background:'black',zIndex:'10'}}
         ></div>

            <section style={{ 
               padding : '2rem 0',
               position: 'absolute',
               width: '100vw',
               
               height: '90px',
               margin: '0 auto',
               
               display: 'initial',
               zIndex:'10'
               
              }}>

           <nav class="navbar navbar-expand-lg navbar-light bg-transperant  ">
  <div class="container">
      <div>
    <a class="navbar-brand"  href="#" 
     >LANTASPERA </a>

    <p className="tech">TECHNOLOGIES</p>
    </div>
    
    
    <button class="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class= {`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
</section> 

        </div>
    )
}

export default Navbar

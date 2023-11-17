import React from 'react'
import "./navigation.scss";
import logo from "../../assets/bulltrade.png"

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='first flex' >
        <div className='nav-logo' >
          <img className='brand-logo' src={logo} alt='' />
        </div>
       <div className='nav-links flex' >
        <span className='nav-link' >About us</span>
        <span className='nav-link' >Mirror Trading</span>
        <span className='nav-link' >Trading Categories</span>
        <span className='nav-link' >Insight</span>
        <span className='nav-link' >Software</span>
      </div> 
      </div>

      <div className='second flex' >
        <button>EN</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navigation
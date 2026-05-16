import { useState } from 'react'
import './Header.css'
import Navbar from './Navbar'
function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header-container'>
        <div className='header-values'>
          <div className='weather'>
            72 degree F
          </div>
          <div className='date'>
            MAY 16, 2026
          </div>
        </div>        
        <div className='header-title'>
          <div className='name'>
            THE CHRONICLES OF YASHVI MEHTA
          </div>
          <div className='tagline'>
          ~Built one commit at a time~
        </div>
        </div>
        <div className='navbar'>
          <Navbar/>
        </div>
        
        
      </div>
    </>
  )
}

export default Header
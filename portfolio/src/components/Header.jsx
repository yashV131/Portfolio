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
      <div className='overflow-wrapper'>
        <div className='scrolling-text'>
        BREAKING NEWS: A developer forgot to press save and her laptop's battery died. She went on a walk for 30 minutes

        || BREAKING NEWS: Programmer removes one semicolon, entire app starts working

        || BREAKING NEWS: She says “it works on my machine” and closes laptop, refusing to elaborate

        || BREAKING NEWS: CSS bug disappears after developer aggressively refreshes page 37 times

        || BREAKING NEWS: Programmer deletes console.log(), suddenly everything breaks in a completely different way

        || BREAKING NEWS: Commit added at 2 am breaks the entire system. Developer throws a fit and breaks her laptop 
        </div>
      </div>
    </>
  )
}

export default Header
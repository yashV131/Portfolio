import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import DotMatrix from './components/DotMatrix'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <Header/>
      </div>
      <div className='dotmatrix'>
        <DotMatrix/>
      </div>
      
    </>
  )
}

export default App

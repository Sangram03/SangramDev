import React from 'react'
import "./Navbar.css"

import { Terminal, Github , Twitter } from "lucide-react";

const Home = () => {
  return (
    <div className='back-div'>
        <div className='left'>
        <p>Sangram </p>
        <span><Terminal className="ml-3 w-6 h-6 text-green-500" /></span>
        </div>
        
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Project</a>
        <a>Contact-us</a>
      </nav>
      <div className='social-icon'>
         <Github className="ml-3 w-6 h-6 text-green-500" />
      <Twitter className="ml-3  w-6 h-6 text-red-600" />
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="footer">
        <p className='footerText'>&copy; all copyright reserved</p>
        <p className='footerText'>Follow me on 
        <Link to="https://github.com/vchaitanya7"  className='footerlink'>GitHub</Link>
        </p>
    </footer>
    </>
  )
}

export default Footer
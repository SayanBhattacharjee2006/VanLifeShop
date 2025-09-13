import React from 'react'
import vanLifeLogo from '../../assets/vanLifeLogo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='height-[10vh] flex items-center justify-between px-8 border-b-2 p-4 '
    style={{ backgroundColor: 'hsla(33, 100%, 96%, 1)' }}
    >
        <img src={vanLifeLogo} alt="Van Life Logo" className='h-8'/>
        <nav>
            <ul className='flex gap-6 font-medium text-lg text-[hsla(0, 0%, 30%, 1)]'>
                <Link to='hosts'>Hosts</Link>
                <Link to='about' >About</Link>
                <Link to='vans'>Vans</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
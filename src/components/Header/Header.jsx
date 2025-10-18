import React from 'react'
import vanLifeLogo from '../../assets/vanLifeLogo.png'
import { NavLink,Link } from 'react-router-dom'
function Header() {
  return (
    <header className='height-[10vh] flex items-center justify-between px-8 border-b-2 p-4 '
    style={{ backgroundColor: 'hsla(33, 100%, 96%, 1)' }}
    >
        <Link to="">
          <img src={vanLifeLogo} alt="Van Life Logo" className='h-8'/>
        </Link>
        <nav>
            <ul className='flex gap-6 font-medium text-lg text-[hsla(0, 0%, 30%, 1)]'>
                <NavLink
                 to='hosts'
                 className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                 >
                  Hosts
                  </NavLink>
                <NavLink
                 to='about'
                  className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                  >About
                  </NavLink>

                <NavLink
                 to='vans'
                  className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                  >
                  Vans
                  </NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header
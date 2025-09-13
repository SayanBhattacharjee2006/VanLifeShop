import React from 'react'
import bgImg from '../../assets/aboutbg.png'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className="bg-cover bg-center h-[80vh] flex flex-col justify-between px-4 about-page bg-amber-100"
    >
            <div className='pt-[50px] flex flex-col gap-4 about-page-text'>
                <h1 className='text-4xl  m-auto font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className='text-gray w-[400px] m-auto bg-amber-200 p-5 rounded-2xl'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className='p-2 font-bold text-xl text-cyan-950 mx-auto'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="w-[400px] flex flex-col justify-center items-center gap-6 about-page-explore bg-amber-500 mx-auto p-6 rounded-2xl mb-10">
                <h2 className='text-xl font-bold '>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="bg-black text-white p-2 px-5 rounded-xl text-xl" to="/vans">Explore our vans</Link>
            </div>
        </div>
  )
}

export default About
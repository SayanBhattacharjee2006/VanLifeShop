import React from 'react'
import { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {getHostVans} from "../../server"

export function loader(){
    return getHostVans();  // Replace with actual API call to get host vans data
}

function HostVans() {
    const vans= useLoaderData();

  const hostAllVans=vans.map(van=>{
    return (
      <Link
            to={van.id}
            key={van.id}
            className="[color:unset] [text-decoration:unset]"
        >
            <div className="flex items-center bg-amber-100 shadow-lg mb-[15px] py-[18px] pl-[24px] rounded-lg hover:scale-101 hover:shadow-2xl transition-all duration-300" key={van.id}>
                <img src={van.imageUrl} className='h-[70px] rounded-[5px] mr-[17px]' alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3 className='text-[20px] font-semibold my-[10px] text-black'>{van.name}</h3>
                    <p className='my-[10px] text-gray-700'>${van.price}/day</p>
                </div>
            </div>
        </Link>
    )
  })


  return (
    <section className='h-[74vh]'>
            <h1 className="px-[26px] font-bold text-2xl text-black my-[5px]">Your listed vans</h1>
            <div className="px-[26px]">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostAllVans}
                        </section>

                    ) : (
                            <h2 className="text-xl text-gray-700">Loading...</h2>
                        )
                }
            </div>
        </section>
  )
}

export default HostVans
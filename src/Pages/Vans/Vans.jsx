import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

function Vans() {

    const [vansData,setVansData]=useState([])

    useEffect(() => {
    
        fetch("/api/vans")
            .then(res=>res.json())
            .then(data=>setVansData(data.vans))
        },[])
        
        const vansList=vansData.map(van=>{
            return(
            <div key={van.id} className="w-full px-2 py-4 m-2 border border-gray-300 rounded-lg bg-orange-100 van-tile hover:scale-105 hover:shadow-lg transition-all duration-300 ">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} className='w-[250px] rounded-2xl shadow-black border-2 border-amber-900  m-auto'/>
                    <div className="van-info flex justify-between items-center my-4 mx-2 font-bold text-lg">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} bg-blue-500 px-3 py-1 font-bold rounded ml-3 text-white selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

  return (
        <div className="van-list-container bg-amber-50">
            <h1 className='font-bold text-4xl ml-3'>Explore our van options</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-4">
                {vansList}
            </div>
        </div>
  )
}

export default Vans
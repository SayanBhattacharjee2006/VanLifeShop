import React from "react";
import { useParams, useLocation, useLoaderData } from "react-router";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {getVans} from "../../../Api.js"

export function loader({params}){
  return getVans(params);  // Call the getVans function with the params passed to the loader function.  The getVans function will return the vans data.  This data
}


function VanDetails() {
    const van = useLoaderData();
    const location =useLocation();

  const search = location.state?.search || "";
  const filteredType =location.state?.type || "all" ;
  return (
    <section>
        <Link 
        to={`..${search}`}
        relative="path" 
        className="back-button">
        &larr; <span>{`Back to ${filteredType} vans`}</span>
      </Link>

        <div className="van-detail-container h-screen p-10" style={{ backgroundColor: 'hsla(33, 100%, 96%, 1)' }}>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} className="border-2 border-amber-800 rounded-2xl h-[300px] m-auto hover:scale-105 hover:shadow-lg transition-all duration-300"/>
                    <div className="van-detail-info my-6 space-y-4 flex flex-col gap-1">
                        <i className={`van-type ${van.type} selected bg-amber-600 px-5 py-1 text-center  w-[100px] text-2xl rounded-2xl shadow-black`}>{van.type}</i>
                        <h2 className="text-black font-bold text-2xl">{van.name}</h2>
                        <p className="text-xl"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="w-50 m-auto bg-amber-700 text-2xl px-3 py-1 rounded-2xl hover:scale-95 hover:shadow-lg transition-all duration-300">Rent this van</button>
                    </div>
                </div>
            ) : <h2 style={{ color: 'hsla(0, 0%, 30%, 1)' }}>Loading...</h2>}
        </div>
    </section>
  )
}

export default VanDetails;

import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams,Link,useLoaderData } from "react-router-dom";
import { getVans } from "../../../Api";

export function loader(){
  return getVans();
}


function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const vansData = useLoaderData(loader);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayedVansData = typeFilter
    ? vansData.filter(
        (van) => van.type.toLowerCase() === typeFilter.toLowerCase()
      )
    : vansData;

  const vansList = displayedVansData.map((van) => {
    return (
      <div
        key={van.id}
        className="w-full px-2 py-4 m-2 border border-gray-300 rounded-lg bg-orange-100 van-tile hover:scale-105 hover:shadow-lg transition-all duration-300 "
      >
        <Link 
            to={van.id}
            state={{search : `?${searchParams.toString()}`, type: searchParams.get("type")  }}
        >

          <img
            src={van.imageUrl}
            className="w-[250px] rounded-2xl shadow-black border-2 border-amber-900  m-auto"
          />
          <div className="van-info flex justify-between items-center my-4 mx-2 font-bold text-lg">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i
            className={`van-type ${van.type} bg-blue-500 px-3 py-1 font-bold rounded ml-3 text-white selected`}
          >
            {van.type}
          </i>
        </Link>
      </div>
    );
  });


  function handleURLparameter(type, value) {
    setSearchParams(prevParam =>{
        if(value === "null") {
            prevParam.delete("type");
        }else{
            prevParam.set("type", value);
        }
        return prevParam;
    })
  }


  if(error){
    return (
      <div>
        {/* <h1>{error.status}</h1> */}
        <h2>Error: {error.message}</h2>
      </div>
      )
  }




  return (
    <div className="van-list-container bg-amber-50">
      <h1 className="font-bold text-4xl ml-3">Explore our van options</h1>

      <div className="flex gap-0.5 p-2 mt-2">
        <button
          onClick={() => handleURLparameter("type", "simple")}
          className={`w-30 m-auto bg-amber-300 text-xl px-3 py-1 rounded-2xl hover:scale-95 hover:shadow ${
            typeFilter === "simple" ? "bg-amber-600" : null
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleURLparameter("type", "luxury")}
          className={`w-30 m-auto bg-amber-300 text-xl px-3 py-1 rounded-2xl hover:scale-95 hover:shadow ${
            typeFilter === "luxury" ? "bg-amber-600" : null
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleURLparameter("type", "rugged")}
          className={`w-30 m-auto bg-amber-300 text-xl px-3 py-1 rounded-2xl hover:scale-95 hover:shadow ${
            typeFilter === "rugged" ? "bg-amber-600" : null
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleURLparameter("type", "null")}
            className={`w-50 m-auto bg-amber-300 text-2xl px-3 py-1 rounded-2xl hover:scale-95 hover:shadow `}
          >
            Clear all
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-4">
        {vansList}
      </div>
    </div>
  );
}

export default Vans;

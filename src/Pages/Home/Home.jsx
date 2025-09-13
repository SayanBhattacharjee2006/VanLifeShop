import React from "react";
import homeBg from "../../Assets/homeBg.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        className=" bg-cover bg-center h-[80vh] relative px-4 "
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <h1 className="text-white pt-[150px] mx-auto font-extrabold text-5xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white m-auto text-lg font-medium mt-4">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link 
          to="vans"
          className="bg-[hsla(33, 100%, 50%, 1)] text-white font-medium px-6 py-3 rounded-lg inline-block mt-6 hover:bg-[hsla(33, 100%, 40%, 1)] transition bg-amber-700  text-center w-[200px] mx-auto sm:w-auto sm:mx-0">
            Find your van</Link>
      </div>
    </>
  );
}

export default Home;

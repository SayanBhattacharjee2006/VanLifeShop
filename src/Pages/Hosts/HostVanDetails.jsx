import React from "react";
import { useParams,Link,NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]))
      .catch((error) => console.error(error));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link 
        to=".."
        relative="path" 
        className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="bg-white p-6 my-[30px] mx-[26px]">
        <div className="flex items-center">
          <img
            src={currentVan.imageUrl}
            className="h-[160px] rounded-[5px] mr-5"
          />
          <div className="host-van-detail-info-text">
            <i
              className={`h-[34px] px-[26px] py-[6px] font-normal  border-none rounded-[5px]  transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#FFEAD0] focus:outline-none [&.selected]:text-[#FFEAD0] bg-[#ffbca8]`}
            >
              {currentVan.type}
            </i>
            <h3 className="mt-6 mb-[5px] text-[26px] font-bold">
              {currentVan.name}
            </h3>
            <h4 className="text-[20px] my-0">${currentVan.price}/day</h4>
          </div>
        </div>
      </div>

      <nav>
            <ul className='flex gap-6 font-medium text-lg text-[hsla(0, 0%, 30%, 1)]'>
                <NavLink
                 to='.'
                 end="true"
                 className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                 >
                  Details
                  </NavLink>
                <NavLink
                 to='pricing'
                  className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                  >
                    Pricing
                  </NavLink>

                <NavLink
                 to='photos'
                  className={({isActive})=>(isActive?"font-bold underline text-[#161616]":null)}
                  >
                  Photos
                  </NavLink>
            </ul>
        </nav>

        <Outlet context={{currentVan}}/>
    </section>
  );
}

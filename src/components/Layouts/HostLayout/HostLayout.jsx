import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const classStyle= "[text-decoration:none] text-[#4D4D4D] font-medium px-5 py-[5px] hover:text-[#161616] hover:underline hover:font-semibold"

function HostLayout() {
  return (
    <div>
      <nav className="flex">
        <ul className="flex gap-6 font-medium text-lg text-[hsla(0, 0%, 30%, 1)]">
          <NavLink
           to="."
           end="true"
           className={({isActive})=>(isActive?`font-bold underline text-[#161616] ${classStyle} `: classStyle)}
           >
            Dashboard
            </NavLink>
          <NavLink
           to="income"
           className={({isActive})=>(isActive?`font-bold underline text-[#161616] ${classStyle} `: classStyle)}
           >
            Income
            </NavLink>
          <NavLink
           to="vans"
           className={({isActive})=>(isActive?`font-bold underline text-[#161616] ${classStyle} `: classStyle)}
           >
            Vans
            </NavLink>
          <NavLink
           to="review"
           className={({isActive})=>(isActive?`font-bold underline text-[#161616] ${classStyle} `: classStyle)}
           >
            Review
            </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;

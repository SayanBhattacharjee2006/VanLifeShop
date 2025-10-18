import React from 'react'
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
    const { currentVan } = useOutletContext();
  
  return (
    <img src={currentVan.imageUrl} className="h-[100px] rounded-[5px]" />
  )
}

export default HostVanPhotos
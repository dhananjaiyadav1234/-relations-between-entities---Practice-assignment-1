import React from 'react'
import '../App.css'

function DestinationCard({id,image,name,location,description,price}) {
  return (
    <div className='card'>
        <img src={image}/>
        <p>{name}</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>{price}</p>
      
    </div>
  )
}

export default DestinationCard

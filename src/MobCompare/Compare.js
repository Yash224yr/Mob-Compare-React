
import React, { useContext } from 'react'
import { detailcontext } from './Home'

function Compare() {

  const { compare, setcompare } = useContext(detailcontext)



  return (
    <div className='alldata'>
      {
        compare.map((element, index) => {
          return (
            <div className='compdata' key={index}>
              <img src={element.image}></img>
              <h1>{element.brand} </h1>
              <h2>{element.model}</h2>
              <ul>
                <li>Rear camera: {element.rear_camera}</li>
                <li>Front camera: {element.front_camera}</li>
                <li>Screen: {element.screen}</li>
                <li>Storage: {element.storage}</li>
                <li>OS: {element.os}</li>
                <li>Cost: {element.cost}</li>
              </ul>

            </div>
          )
        })
      }
    </div>

  )
}

export default Compare
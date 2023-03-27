import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { detailcontext } from './Home'


function Mob() {

    const { product } = useContext(detailcontext)
    const { compare, setcompare } = useContext(detailcontext)

    function handlercompare(element) {
        const isduplicate = compare.filter(item => item.id === element.id).length > 0;
        if (isduplicate) {
            alert("Already added to compare")
        }
        else {
            setcompare([...compare, element])
        }
    }

    console.log(compare)

    return (

        <div className='mobile'>
            {
                product.map((element, index) => {
                    return (<div className='models' key={index}  >
                        <img src={element.image}></img>
                        <h3>{element.brand}</h3>
                        <p>{element.model}</p>
                        <div className='detail'>
                            <h6><Link onClick={() => { handlercompare(element) }}>Add To Compare</Link></h6>
                            <h6><Link to={`/Detail/${element.id}`}>Details</Link></h6>
                        </div>

                    </div>)
                })
            }

        </div>
    )
}

export default Mob
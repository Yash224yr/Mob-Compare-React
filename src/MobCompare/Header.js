import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { detailcontext } from './Home'

function Header() {
    const {compare , setcompare } = useContext(detailcontext)
  return (
    <div className='head'>
        <ul>
            <li>Catalog</li>
            <li><Link to="/Compare">Compare ({compare.length})</Link></li>
        </ul>
    </div>
  )
}

export default Header
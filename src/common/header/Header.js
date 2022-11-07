import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'






const Header = () => {
  return (
    <header>
      <div className='nav'>
        <div>
          
          <Link to ='/'>
           
           <h2>loogooo</h2>
           
            
          </Link>

          
          
          
        </div>
       
        <nav>
          <ul>
            <li>
              <Link to ='/Home'>Deals</Link>
            </li>
            <li>
              <Link to ='/Login'>Sing up</Link>
            </li>
            <li>
              <Link to ='/Cart'> Cart</Link>
            </li>
          </ul>
            
              
            
          
        </nav>
      </div>
    </header>
  )
}

export default Header
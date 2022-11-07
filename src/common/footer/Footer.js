import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer =()=> {
  return(
    <footer>
      <div className='naf'>
        <div>
          <Link to ='/Policy'>
            <p>Terminos y servicios</p>
            </Link>
        </div>

      </div>

    </footer>



  )

}
export default Footer
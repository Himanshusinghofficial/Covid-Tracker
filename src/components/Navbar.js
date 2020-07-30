import React from 'react'
import { Link } from 'react-router-dom'

const NavbarValue = () => {
    return (

        <div className="navbar bg-sucess bg-dark " style={{ padding: '5px 50px 5px 50px' }}>
            <Link to='/' style={{ padding: '0px' }} >
                <h1><i class="fas fa-thermometer-full"></i> Covid Tracker</h1>
            </Link>
            <ul className='text-center'>
                <li>
                    <Link to='/home' ><i class="fas fa-home"> </i> Home</Link>
                </li>
                <li>
                    <Link to='/about'><i class="fas fa-address-card"></i> About</Link>
                </li>
                <li>
                    <Link to='/login/himanshu_singh'><i class="fas fa-sign-in-alt"></i> Himanshu</Link>
                </li>
            </ul>

        </div>
    )
}

export default NavbarValue;
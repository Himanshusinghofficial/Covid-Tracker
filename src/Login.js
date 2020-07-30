import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container text-cneter'>
            <div className='card' style={{ border: 'transparent' }}>
                <h1><i class="fas fa-sign-in-alt"></i> Login</h1>
                <p style={{ marginTop: '5px' }}>Logged In as <b>Himanshu Singh</b></p>
                <p style={{ marginTop: '5px' }}><i class="fas fa-check-circle"></i><b>Verified Account</b></p>
                <p style={{ marginTop: '5px' }}><i class="fas fa-info-circle"></i><b>Chech Details</b></p>
                <Link to='/about'><button className="btn-success btn:hover" style={{ padding: '3px 25px 3px 25px', marginTop: '5px', border: 'transparent', borderRadius: '5px' }}>About</button></Link>
                <p style={{ marginTop: '10px' }}><i class="fas fa-home"></i><b>Go to Home</b></p>
                <Link to='/home'><button className="btn-primary btn:hover" style={{ padding: '3px 25px 3px 25px', marginTop: '5px', border: 'transparent', borderRadius: '5px' }}>Home</button></Link>
            </div>
        </div >
    )
}

export default Login
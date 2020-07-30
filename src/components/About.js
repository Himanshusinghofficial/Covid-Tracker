import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <div className='grid-2'>
                <div className='card' style={{ border: 'transparent' }}>
                    <h3><b>Developer</b></h3>
                    <p>Name: Himanshu Singh</p>
                    <p>Student: B.tech(Computer Science Engineering)</p>
                    <p>Batch 2017-2021</p>
                    <p>Technology Used: reactjs</p>
                    <p>From: GB Pant Govt. Engineering College</p>
                    <p>Gmail: hs882677@gmail.com</p>
                    <p>Contact: https://www.linkedin.com/in/himanshu-singh-216978172/</p>
                    <p>Github: https://github.com/Himanshusinghofficial</p>
                </div>
                <div className='card' style={{ border: 'transparent' }}>
                    <h3><b>about this app</b></h3>
                    <p>app is used to track covid data</p>
                    <p>version: 1.0.0</p>
                    <p>Used Covid API</p>
                </div>
            </div>
        </div>

    )
}

export default About

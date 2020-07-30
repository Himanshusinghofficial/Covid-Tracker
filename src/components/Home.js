import React from 'react'
import ReactCountUp from 'react-countup'

const Home = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return ''
    }
    // console.log(confirmed.value);
    return (

        <div className="text-center container">
            <span style={{ fontSize: '40px' }}>Covid-19</span><small>Current Data</small>

            <div className='grid-3' >
                <div className='card' style={{ border: 'transparent', borderBottom: '10px  solid blue' }}>
                    <span><b>Confirmed Cases: </b></span><br /><ReactCountUp style={{ fontSize: '35px' }} start={0} end={confirmed.value} separator=',' duration={2.5}></ReactCountUp><br />
                    <span><b>Date: </b></span><span>{new Date(lastUpdate).toDateString()}</span><br /><br />
                    <span><b>Numbers of Active cases of covid 19</b></span>
                </div>
                <div className='card' style={{ border: 'transparent', borderBottom: '10px  solid green' }}>
                    <span><b>Recovered Cases: </b></span><br /><ReactCountUp style={{ fontSize: '35px' }} start={0} end={recovered.value} separator=',' duration={2.5}></ReactCountUp><br />
                    <span><b>Date: </b></span><span>{new Date(lastUpdate).toDateString()}</span><br /><br />
                    <span><b>Numbers of Recovered cases of covid 19</b></span>
                </div>
                <div className='card' style={{ border: 'transparent', borderBottom: '10px  solid red' }}>
                    <span><b>Deaths Rate: </b></span><br /><ReactCountUp style={{ fontSize: '35px' }} start={0} end={deaths.value} separator=',' duration={2.5}></ReactCountUp><br />
                    <span><b>Date: </b></span><span>{new Date(lastUpdate).toDateString()}</span><br /><br />
                    <span><b>Numbers of Death Rate of covid 19</b></span>

                </div>
            </div>
        </div>
    )

}

export default Home

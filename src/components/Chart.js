import React from 'react'
import { Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    // console.log(confirmed.value);
    // console.log(deaths.value);
    // console.log(recovered.value)
    // console.log(country)
    if (country === '') {
        country = 'World'
    }

    const barchar = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current data of ${country}` },
                }}
            />
        ) : null
    )

    return (

        <div className='container' style={{ marginBottom: '50px' }}>
            {barchar}
        </div>
    )
}

export default Chart
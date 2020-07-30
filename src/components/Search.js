import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../api/index'

const Search = ({ handlecountrychange }) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setfetchedCountries(await fetchCountries())
        }
        fetchApi()
    }, [setfetchedCountries])
    // console.log(fetchedCountries)
    return (
        <div className='container'>
            <select defaultValue="" onChange={(e) => handlecountrychange(e.target.value)} className='all-center' style={{ marginBottom: '50px', width: '400px', border: '0px', borderBottom: '2px solid black', marginTop: '20px', background: 'transparent' }}>
                <option value="">World</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </select>
        </div>
    )
}

export default Search
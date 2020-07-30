import React, { useReducer } from 'react'
import axios from 'axios'
import ApiContext from './ApiContext'
import ApiReducer from './ApiReducer'
import {
    FETCHDATA,
    FETCHDAILYDATA,
    FETCHCOUNTRY
} from '../types'

const ApiState = (props) => {
    const initialState = {
        countries: {},
        data: [],
        dailydata: []
    };
    const [state, dispatch] = useReducer(ApiReducer, initialState);

    const url = 'https://covid19.mathdro.id/api';

    const fetchdata = async (country) => {
        let changeableUrl = url;


        changeableUrl = `${url}/countries/${country}`;
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        dispatch({
            type: FETCHDATA,
            payload: changeableUrl.data
        });

        return { confirmed, recovered, deaths, lastUpdate };


    };

    const fetchDailyData = async () => {
        const datavalue = await axios.get(`${url}/daily`);
        dispatch({
            type: FETCHDAILYDATA,
            payload: datavalue.data.items
        });

        // const { data } = await axios.get(`${url}/daily`);

        // return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));


    };

    const fetchCountries = async () => {

        const ans = await axios.get(`${url}/countries`);
        dispatch({
            type: FETCHCOUNTRY,
            payload: ans.data.items
        });

        // const { data: { countries } } = await axios.get(`${url}/countries`);

        // return countries.map((country) => country.name);


    };

    return (
        <ApiContext.Provider
            value={{
                countries: state.countries,
                data: state.data,
                dailydata: state.dailydata,
                fetchdata,
                fetchDailyData,
                fetchCountries
            }}
        >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState
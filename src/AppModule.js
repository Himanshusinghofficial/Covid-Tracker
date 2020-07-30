import Home from './components/Home'
import Chart from './components/Chart'
import React, { Component } from 'react'
import { Fetchdata } from './api/index'
import Search from './components/Search';

class AppModule extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchdata = await Fetchdata();

        this.setState({ data: fetchdata })
    }
    handlecountrychange = async (country) => {
        const fetchdata = await Fetchdata(country);

        // console.log(fetchdata)
        this.setState({ data: fetchdata, country: country })
    }

    render() {
        const { data, country } = this.state;
        // console.log(country)
        // console.log(data);
        return (
            <div>
                <Home data={data} />
                <Search handlecountrychange={this.handlecountrychange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default AppModule
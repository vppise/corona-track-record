import React, { Component } from 'react';
import Cards from './component/Cards/Cards';
import Chart from './component/Chart/Chart';
import CountryPicker from './component/CountryPicker/CountryPicker';
import { fetchData } from './api';

import Style from './App.module.css';

 class App extends Component {

  state = {
    data: {},
  }

  async componentDidMount () {

    const getData = await fetchData()

   this.setState( {data : getData} )

  }

  render() {

    const {data} = this.state;

    return (
      <div className={Style.container}>
        < Cards data={data} />
        < CountryPicker/>
        < Chart />
      </div>
    )
  }
}

export default App;
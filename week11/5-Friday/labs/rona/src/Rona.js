import React, { Component } from 'react';
import DoughnutExample from '../node_modules/chart.js/dist/Chart.bundle';

class App extends Component {

  constructor() {
    super();
    this.state =  {
      states: [],
      searchResults: ""
    }
  }

  componentDidMount = async () => {
    let url = "https://corona.lmao.ninja/v2/states";
    let response = await fetch(url);
    let results = await response.json();

    this.setState({
      states : results
    }, () => {
      console.log(this.state.states);
    })
  }

  handleChange = (e) => {
    this.setState({
      searchResults: e.target.value
    })
  }


  render() {
    let {states, searchResults} = {...this.state};

    let filteredStates = states.filter(state =>{
      return state.state.toLowerCase().includes(searchResults.toLowerCase())
    })



    
    let stateList = filteredStates.map((state, index) => {
      return <li key={index}>
        <h1>{state.state}</h1>
        <p>Cases: {state.cases}</p>
        <p>Deaths: {state.deaths}</p>
      </li>
    })

    return (
      <>
        <h1>States</h1>
        <input type="text" onChange={this.handleChange}/>
        
        {stateList}
      </>
    )
  }
}

export default App;

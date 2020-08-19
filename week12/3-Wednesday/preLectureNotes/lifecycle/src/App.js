import React, { Component } from 'react'
import Loading from './Loading'
import Child from './Child'

class App extends Component {

constructor(props) {
  super(props)
  console.log("constructor called")

  this.state = {
    isLoaded: false
  }
}

componentDidMount = () => {
  console.log('component did mount')

  // api

  setTimeout(() => {
    this.setState(
      {
        isLoaded: true
      }
    )
  }, 3000)
}



  render() {
    console.log('home page rendered')

    if(!this.state.isLoaded) {
      return <Loading />
    }
    else {
    return (
      <>
        Home Page
        <br/> <br/>
        <Child data={4} />
        
      </>
    )
    }
  }
}

export default App

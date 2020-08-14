import React, { Component } from  'react';

class App extends Component {

render(){


  let people = ["Dan", "Woody", "Micael", "RJ", "Cainan", "Micah", "Chris",  "Jeremy"]

  return(
    <>
      {
        people.map((person, index) => {
          return <li key={index}>{person}</li>
        })
      }
    </>
  )
}
}

export default App;
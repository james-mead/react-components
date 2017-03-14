import React from 'react'

// import beerData from '../../data/beers.json'
// import ListBeer from './Beers'
import Child1 from './Child1'
import Child2 from './Child2'

// console.log(beerData.beers)


export default React.createClass({
  getInitialState() {
    return {
      activeComponent: 'Child1'
    }
  },
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        {
          this.state.activeComponent === 'Child1' ?
          <Child1 changeChild={this.changeChild} /> :
          <Child2 changeChild={this.changeChild} />
        }
      </div>
    )
  },
  changeChild(otherChild, e) {
    e.preventDefault()
    this.setState({activeComponent: otherChild})
  }
})


// const App = () => {
//   return (
//     <div>
//       <h1>NZ Craft Beers</h1>
//       <ListBeer info={beerData.beers} />
//     </div>
//   )
// }
//
// export default App

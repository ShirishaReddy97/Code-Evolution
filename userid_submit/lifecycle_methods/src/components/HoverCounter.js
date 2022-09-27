import React, { Component } from 'react'
import withCounter from './withCounter' 
class HoverCounter extends Component {
     render() {
        const { count,clickHandle} = this.props
    return <h2 onMouseOver={clickHandle}>Hovered {count} Times</h2>
      
  }
}

export default withCounter(HoverCounter,10)

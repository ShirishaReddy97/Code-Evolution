import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
    render() {
        const { count,clickHandle} = this.props
        return <button onClick={clickHandle}>{this.props.name} Clicked {count} Times</button>

    }
}

export default withCounter(ClickCounter,5)

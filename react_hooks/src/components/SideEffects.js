import React, { Component } from 'react'

class SideEffects extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0,
         name:' '
      }
    }
    componentDidMount(){
        document.title=`You Clicked ${this.state.count} Times`
        this.interval=setInterval(this.tick,1000)
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Updating document title');
        if(prevState.count !== this.state.count){
        document.title=`You Clicked ${this.state.count} Times`
        }
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e=>{this.setState({name:e.target.value})
        }}/>
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Submit</button>
        Click {this.state.count} Times
      </div>
    )
  }
}

export default SideEffects

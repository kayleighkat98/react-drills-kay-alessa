import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state={who:''};
     
      }
      handleClick1=()=>{
          this.setState(state=> ({
              who: 'world'
          }))
      }
      handleClick2=()=>{
        this.setState(state=> ({
            who: 'Friend'
        }))
    }
    handleClick3=()=>{
        this.setState(state=> ({
            who: 'react'
        }))
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleClick1}>World</button>
                <button onClick={this.handleClick2}>Friend</button>
                <button onClick={this.handleClick3}>React</button>
            </div>
        )
    }
}

export default HelloWorld;
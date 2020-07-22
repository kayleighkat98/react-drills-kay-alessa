import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count: 0,
        };
        
    }//set timer
    componentDidMount(newNum){
        this.interval = setInterval(() => {
            this.setState(state=> (
                {count: state.count +=1}
            ))
        }, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if (count >= 8) {
          clearInterval(this.interval)
          return 'BOOM!!!!'
        } else if (count % 2 === 0) {
          return 'tick'
        } else {
          return 'tock'
        }
    }
    
    render() {
        return (
          <div >
            {this.renderDisplay()}
          </div>
        )
      
    }

}

export default Bomb;



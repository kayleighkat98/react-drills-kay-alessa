import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
        spinningTheChamber: true
    })
        this.timeout = setTimeout(() => {
            this.setState(state => ({
                    chamber: Math.ceil(Math.random() * 8),
                    spinningTheChamber: false,
                    }
               
            )) 
            console.log(this.state.spinningTheChamber);
        }, 2000)
    }

    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state;
        const {bulletInChamber} = this.props;
        if(spinningTheChamber === true){
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if (chamber === bulletInChamber){
            return 'BANG!!!!'
        }
        else{
            return 'you\'re safe!!'
        }
    }

    render() {
        console.log(this.props)
        return (
            <div >
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>Pull the trigger</button>
            </div>
        )

    }
}

export default RouletteGun
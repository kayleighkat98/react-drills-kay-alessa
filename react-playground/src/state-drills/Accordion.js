import React from 'react'
import { ReactComponent } from '*.svg';

class Accordion extends ReactComponent{
    static props = {
        section: []
    };
    render() {
        console.log(this.section)
        return (
            <div >
                <p>hello</p>
                <ul>
                    <li>
                        <button>{this.props.section.name}</button>
                        <p>
                            this appears when the button is pushed
                        </p>
                    </li>
                </ul>
            </div>
        )

    }
}

export default Accordion
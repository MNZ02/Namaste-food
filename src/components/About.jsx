import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    
    render() {
        
        return (
            <div>
                <h1>About, {this.props.name}</h1>
                <h2>count: {this.state.count}</h2>
            </div>
        )
    }
}

export default About

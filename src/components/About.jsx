import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <div>
                <h1>About, {this.props.name}</h1>
            </div>
        )
    }
}

export default About

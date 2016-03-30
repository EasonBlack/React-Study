import React , { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText : ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleSubmit() {
        console.log(this.props.route);
        this.props.route.testhandle(this.state.inputText);
    }

    render() {
        return (
            <div>
                <h2>It is about view</h2>
                <input type='text'
                       value={this.state.inputText}
                       onChange= {this.handleChange.bind(this)}
                    />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}


export default About;
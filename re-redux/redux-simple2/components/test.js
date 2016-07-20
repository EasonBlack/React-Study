import React from 'react';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSet = this.handleSet.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleSet() {
        this.props.actions.setText(this.state.inputText);
    }

    render() {
        return <div>
            <div>{this.props.content.text}</div>
            <input type="text"
                   value={this.state.inputText}
                   onChange= {this.handleChange}
            />
            <button onClick={this.handleSet}>Click</button>
        </div>;
    }
}

export default Test;
import React, { Component } from 'react';

class TodoInput extends Component {
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

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.addTodo(this.state.inputText);
    }

    render() {
        return  <div>
             <input type='text'
                 placeholder = 'Tyep in your todo'
                 value={this.state.inputText}
                 onChange= {this.handleChange.bind(this)}
             />
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>;
    }
}

export default TodoInput;

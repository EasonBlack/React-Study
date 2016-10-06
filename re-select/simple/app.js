import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            items: [
                {id: 1, name: 'aaa'},
                {id: 2, name: 'bbb'},
                {id: 3, name: 'ccc'}
            ]
        }
        this.onChange = this.onChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    onChange(e) {
        let value;
        if (e && e.target) {
            value = e.target.value;
        } else {
            value = e;
        }
        this.setState({
            value,
        });
    }

    confirm() {
        console.log(this.state.value);
    }

    render() {
        return <div>
            <select
                value={this.state.value}
                onChange={this.onChange}>
                {this.state.items.map((o, i) => {
                    return <option key={i} value={o.id}>{o.name}</option>;
                })}
            </select>
            <button onClick={this.confirm}>Confirm</button>
        </div>;
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
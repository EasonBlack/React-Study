import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import ReactDOM  from 'react-dom';

class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            box: {}
        };
    }

    componentDidMount() {
        $.getJSON('data/boxes.json', function(result) {
            console.log(result);
            this.setState({box: result[0]});
        }.bind(this));
    }

    render() {
        return <div  className="card-wrapper">
              <BoxContent content = {this.state.box.content} ></BoxContent>
              <BoxExtend   leadTo = {this.state.box.leadTo}  relateTo={this.state.box.relateTo} ></BoxExtend>
            </div>
    }
}

class  BoxContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false
        }
    }

    handleClick(event) {
        this.setState({active : !this.state.active});
    }

    render() {
        return <div className={this.state.active ? 'card-content card-scroll': 'card-content card-omission'} onClick={this.handleClick.bind(this)}>
                 {this.props.content}
            </div>
    }
}

class  BoxExtend extends React.Component {
    render() {
        return <div className="card-extend">
            <CardRow title='Type' />
            <CardRow title='Time'/>
            <CardRow title='Source'/>
            <CardLead leadTo = {this.props.leadTo}/>
            <CardRelate relateTo = {this.props.relateTo} />
        </div>
    }
}

class CardRow extends React.Component {
    render() {
        return <div className="card-row">
                  <div className="row-title">{this.props.title}</div>
                  <span>xxxxxx</span>
               </div>
    }
}


class CardLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            ids : props.leadTo
        }
    }

    handleClick(event) {
        this.setState({active : !this.state.active});
        if(this.state.active) {
        }
    }

    render() {
        //var _style = "row-action plus-minus" + this.state.active ? 'active' : '';
        return  <div className="card-row card-lead">
            <div className="row-title">Lead</div>
            <div className={this.state.active ? 'row-action plus-minus active' : 'row-action plus-minus'}
                 onClick={this.handleClick.bind(this)}>&nbsp;
            </div>
        </div>
    }
}

class CardRelate extends React.Component {
    render() {
        return <div className="card-row card-relate">
            <div className="row-title">Relate</div>
            <div className="row-action plus-minus" >&nbsp;</div>
        </div>
    }
}

ReactDOM.render(<Box />, document.getElementById('container'));
import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import ReactDOM  from 'react-dom';


class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: this.props.boxes
        };
    }

    onExtend(val) {
        this.setState({
            boxes: this.state.boxes.concat(val)
        });
    }

    render() {
        var _extend = this.onExtend.bind(this);
        return  <div>
                {this.state.boxes.map(function(box){
                    return <Box boxid={box} onExtend={_extend}  />
                })}
            </div>;
    }
}


class Box extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            box: {}
        };
    }

    componentDidMount() {
        var self = this;
        $.getJSON('data/boxes.json', function(result) {
            var _box = _.find(result, (r)=> r.id == self.props.boxid );
            this.setState({box: _box});
        }.bind(this));
    }

    render() {
        return <div className="card-wrapper">
              <BoxContent content = {this.state.box.content} ></BoxContent>
              <div className="card-extend">
                <CardRow title='Type' />
                <CardRow title='Time'/>
                <CardRow title='Source'/>
                <CardLead leadTo = {this.state.box.leadTo}  onExtend={this.props.onExtend} />
                <CardRelate relateTo ={this.state.box.relateTo}  onExtend={this.props.onExtend} />
              </div>
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
            active : false
        }
    }

    handleClick(event) {
        this.setState({active : !this.state.active});
        if(!this.state.active) {
            var ids = this.props.leadTo.split(',');
            this.props.onExtend(ids);
        }
    }

    render() {
        return  <div className="card-row card-lead">
            <div className="row-title">Lead</div>
            <div className={this.state.active ? 'row-action plus-minus active' : 'row-action plus-minus'}
                 onClick={this.handleClick.bind(this)}>&nbsp;
            </div>
        </div>
    }
}

class CardRelate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            ids : props.relateTo
        }
    }

    handleClick(event) {
        this.setState({active : !this.state.active});
        if(this.state.active) {
        }
    }

    render() {
        return <div className="card-row card-relate">
            <div className="row-title">Relate</div>
            <div className={this.state.active ? 'row-action plus-minus active' : 'row-action plus-minus'}
                 onClick={this.handleClick.bind(this)} >&nbsp;</div>
        </div>
    }
}

ReactDOM.render(<BoxContainer boxes={['1']}/>, document.getElementById('container'))
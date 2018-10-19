
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

import  Infinite  from 'react-infinite';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {         
            data: ["aaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "ggggg",
            "aaa", "bbbb", "cccc", "ddddd", "eeeee"],
            isInfiniteLoading: false
        };
    }
    
    handleInfiniteLoad() {
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(()=> {
            let _d = [...this.state.date]
            _d = _d.concat(["a", "b"])
            this.setState({
                isInfiniteLoading: false,
                data: _d
            });
        }, 2500);
    }
   


    elementInfiniteLoad() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    }

    render() {
        const { data } = this.state;

        return (
            <Infinite elementHeight={40}
                    containerHeight={250}
                    infiniteLoadBeginEdgeOffset={200}
                    onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                    loadingSpinnerDelegate={this.elementInfiniteLoad()}
                    isInfiniteLoading={this.state.isInfiniteLoading}
            >
               {data.map((a,index)=>{
                   return (<div key={index}>{a}</div>)
               })}
            </Infinite>
          );
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
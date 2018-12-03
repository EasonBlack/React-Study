
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import FlipMove from 'react-flip-move';


const customEnterAnimation = {
    from: { transform: 'scale(0.5, 1)' },
    to:   { transform: 'scale(1, 1)' }
  };

const alphabet = [
    '15','16','17','18','19','20','21','22','23','24','26','27','28',
    '29','30','31','32','33','34','35','36','37','38','39','40','41']
  
const TopArticles = ({ items }) => (
        <FlipMove className="flip-wrapper" duration={350} easing="ease-out" enterAnimation={customEnterAnimation}>
          {items.map((item,index) => (
            <div className='box' key={index}>{item}</div>
          ))}
        </FlipMove>
      );

class App  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [...alphabet]
        }
    }

    shuffle1() {
        this.setState({
            items: [...alphabet.filter(a=>a%2)]
        })
    }

    shuffle2() {
        this.setState({
            items: [...alphabet.filter(a=>a>31)]
        })
    }

    reset() {
        this.setState({
            items: [...alphabet]
        })
    }
    
    render() {
      return (
        <div className="demo">
            <TopArticles items={this.state.items}/>
            <button onClick={this.shuffle1.bind(this)}>Shuffle1</button>
            <button onClick={this.shuffle2.bind(this)}>Shuffle2</button>
            <button onClick={this.reset.bind(this)}>Reset</button>
        </div>
      )
    }
  }

ReactDOM.render((
    <App />
), document.getElementById('app'))
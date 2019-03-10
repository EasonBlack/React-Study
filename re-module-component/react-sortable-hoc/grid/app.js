
import React , {Component}  from 'react'
import ReactDOM  from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';



const SortableItem = SortableElement(({ value }) =>
    <div className='card'>{value}</div>
);

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className='card-container'>
            {items.map((item, index) => (
                <SortableItem key={`item-${index}`} index={index} value={item.name} />
            ))}
        </div>
    );
});



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [ 
                {id: 1, name: 'Item 1'}, 
                {id: 2, name: 'Item 2'}, 
                {id: 3, name: 'Item 3'}, 
                {id: 4, name: 'Item 4'}, 
                {id: 5, name: 'Item 5'}, 
                {id: 6, name: 'Item 6'}, 
                {id: 7, name: 'Item 7'} 
            ],
        };
    }
    
    confirm() {
        console.log(this.state.items)
    }

    onSortEnd({ oldIndex, newIndex }) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        return <React.Fragment>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} axis="xy"/>
        <button onClick={this.confirm.bind(this)}>Confirm</button>
        </React.Fragment> ;
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
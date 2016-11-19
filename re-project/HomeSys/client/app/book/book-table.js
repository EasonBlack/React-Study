import React from 'react'
import BookRow from './book-row.js';

class BookTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.pageAct = this.pageAct.bind(this);

        this.state = {
            pernum: 10,
            current: 1
        }
    }

    componentWillMount() {
    }

    pageAct(n) {

    }


    render() {
        let headers = this.props.headers.split(',');
        let rows = this.props.rows;
        let _props = this.props;

        let _count = this.props.rows.length / this.state.pernum;
        var lis = [];
        for (var i = 1; i <= _count; i++) {
            lis.push(<li><a href="#">{i}</a></li>);
        }
        console.log(lis);
        return <div>
            <div className="table__container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {
                            headers.map(function (h) {
                                return (<th>{h}</th>)
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rows.map(function (r) {
                            return <BookRow _props={_props} headers={headers} row={r}>
                            </BookRow>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <nav aria-label="Page navigation" className="pager__container">
                    <ul className="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {lis}
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>;
    }
}


export default BookTable
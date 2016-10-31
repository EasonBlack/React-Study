import React from 'react'
import BookRow from './book-row.js';

class BookTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }


    render() {
        let headers = this.props.headers.split(',');
        let rows = this.props.rows;
        let _props = this.props;
        return <div>
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
        </div>;
    }
}


export default BookTable
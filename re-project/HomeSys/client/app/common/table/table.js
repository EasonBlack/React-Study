import React from 'react'
import AppRow from './row.js';

class AppTable extends React.Component {
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
                       return <AppRow _props={_props} headers={headers} row={r}>
                       </AppRow>
                    })
                }
                </tbody>
            </table>
        </div>;
    }
}


export default AppTable
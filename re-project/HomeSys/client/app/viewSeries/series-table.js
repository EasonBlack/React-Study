import React from 'react'
import SeiresRow from './series-row.js';

class SeriesTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pernum: 10,
            current: 1
        }
    }

    componentWillMount() {
    }

    render() {
        let headers = this.props.headers.split(',');
        let rows = this.props.rows.slice((this.state.current - 1) * this.state.pernum, this.state.current * this.state.pernum);
        let _props = this.props;

        let _count = Math.ceil(this.props.rows.length / this.state.pernum);
        var lis = [];
        for (let i = 1; i <= _count; i++) {
            lis.push(
                <li className={ this.state.current == i ? 'active': '' }>
                    <a onClick={ (e) => this.pageChange(i)}>{i}</a>
                </li>);
        }
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
                            return <SeiresRow _props={_props} headers={headers} row={r}>
                            </SeiresRow>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}


export default SeriesTable
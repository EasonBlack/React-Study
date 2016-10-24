import React from 'react'

class AppTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }


    render() {
        let headers = this.props.headers.split(',');
        let rows = this.props.rows;
        return <div>
            <table>
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
                        return <tr>
                            {
                                headers.map(function (h) {
                                     return <td>{r[h]}</td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>;
    }
}


export default AppTable
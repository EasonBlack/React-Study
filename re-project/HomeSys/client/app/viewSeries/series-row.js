import React from 'react'

class SeriesRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {headers, row} = this.props;
        return <tr>
            {
                headers.map(function (h) {
                    if(typeof row[h] == 'object' && row[h]) {
                        return <td>{row[h].join(',')}</td>
                    } else {
                        return <td>{row[h]}</td>
                    }
                })
            }
        </tr>
    }

}

export default SeriesRow
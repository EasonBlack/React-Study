import React from 'react'

class BookRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {headers, row} = this.props;
        const _props = this.props._props;
        return <tr>
            {
                headers.map(function (h) {
                    if(h.indexOf('action')>-1) {
                        let _key = h.slice(0,h.indexOf('action'))
                        return <td>
                            <a className="btn btn-primary" onClick={_props[_key].bind(this, row)}>{_key}</a>
                        </td>
                    }
                    return <td>{row[h]}</td>
                })
            }
        </tr>
    }

}

export default BookRow
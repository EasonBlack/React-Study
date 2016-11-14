import React from 'react'

class Chart7DaysSum extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let styles = {
            liSection: {
                lineHeight:'2em'
            },
            titleSection: {
                width: '100%',
                height: '30px',
                lineHeight:'30px',
                textAlign: 'center'
            },
            colSection: {
                width:'33.333%',
                textAlign: 'left',
                paddingLeft: '1em',
                display: 'inline-block'
            }
        }

        const {charttitle, rows} = this.props;
        return <div>
            <div style={styles.titleSection}>{charttitle}</div>
            <ul>
            {
                 rows.map((r) => {
                     return  <li style={styles.liSection}>
                          <span style={styles.colSection}>{r.typename}</span>
                          <span style={styles.colSection}>{r.hour}</span>
                          <span style={styles.colSection}>{r.trophy}</span>
                      </li>
                 })
            }
            </ul>
       </div>
    }

}

export default Chart7DaysSum
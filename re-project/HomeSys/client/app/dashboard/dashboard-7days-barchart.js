import React from 'react'

class Chart7DaysBarChart extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let styles = {
            svg: {
                width: '100%',
                height: '100%'
            }
        }

        return <svg  x="0"  y="0"  height="100%" viewBox="0 0 400 150"
                     preserveAspectRatio="none" version="1.1"
        >
        </svg>
    }

}

export default Chart7DaysBarChart
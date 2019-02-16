
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import "../../../node_modules/chartist/dist/chartist.min.css"


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {   
        return <div id='project-stats' className='areaGradientShadow1' ref='chartWrapper'>
        </div>;
    }

    componentDidMount() {

        let projectStats= new Chartist.Line(this.refs.chartWrapper, {
    
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
            series: [
                [20, 180, 125, 40, 80, 50, 20],
                [75, 120, 50, 80, 130, 60, 120],
                [110, 50, 70, 20, 90, 150, 0]
                ]
        }, {
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            chartPadding: {
                right: 35
            },

            axisX: {
                showGrid: false,
            },
            axisY: {
                    labelInterpolationFnc: function (value) {
                    return value + 'k';
                },
                scaleMinSpace: 40,
                showGrid: false,
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true,
                    pointClass: 'ct-point'
                })
            ],
            low: 0,
            onlyInteger: true,
        });
    
        projectStats.on('created', function (data) {
            var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'area-gradient',
                x1: 1,
                y1: 0,
                x2: 0,
                y2: 0
            }).elem('stop', {
                offset: 0,
                'stop-color': 'rgba(248,161,236, 1)'
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': 'rgba(115,150,255, 1)'
            });
    
            return defs;
    
        }).on('draw', function (data) {
            var circleRadius = 9;
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: data.x,
                    cy: data.y,
                    'ct:value': data.y,
                    r: circleRadius,
                    class: data.value.y === 180 || data.value.y === 150 ? 'ct-point-circle ct-point' : 'ct-point ct-point-circle-transperent'
                });
                data.element.replace(circle);
            }
            if (data.type === 'line' || data.type == 'area') {
                data.element.animate({
                    d: {
                        begin: 1000,
                        dur: 1000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
        
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
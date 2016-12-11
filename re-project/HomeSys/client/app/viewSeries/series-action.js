import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import richActions from '../../actions/richAction';

class SeriesAction extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
       return <td className="app__table-button_container">
           {
               (()=>{
                   if(this.props.item.state == 10) {
                       return <span>No Action</span>
                   } else {
                       return <a className="app__table-button app__table-button_finish"
                                 onClick={this.props.setFinish.bind(this, this.props.item, 3)}>
                           Finish
                       </a>
                   }
                })()
           }
       </td>
    }

}

var mapStateToProps = function (state) {
    return {
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(richActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesAction)

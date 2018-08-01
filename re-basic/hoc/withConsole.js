import React, {Component} from 'react'

function withConsole(WrappedComponent) {
    
    class WithConsole extends React.Component {
  
      componentDidMount() {
        console.log('did mount')
      }
  
      render() {
        return <WrappedComponent msg='aaaa'/>;
      }
    }

    return WithConsole;
}

export default withConsole;
import React, {Component} from 'react'
import Loading from './loading'

function withScroll(WrappedComponent, initFetch, scrollFetch) {
    
    class WithScroll extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          isBottomLoading : false,
          items: [],
          currentNum: 111
        }
      }
  
      onScrollHandle(e) {
        let dom = e.target ;     
        if(dom.scrollTop == 0) return false;
        if( ( dom.offsetHeight + dom.scrollTop + 5) >= dom.scrollHeight) {
            if(this.state.isBottomLoading) {
              return false;
            }

            this.setState({ isBottomLoading: true})
            
            setTimeout(()=>{
              scrollFetch(this.state.currentNum)
                .then(res=>{
                    this.setState({ 
                      isBottomLoading: false,
                      items: [...this.state.items, ...res],
                      currentNum: this.state.currentNum + 1
                    })
                })
                        
            }, 500)  
        }
      }
  
      render() {
        let {items} = this.state;
        return <div className='scroll-wrapper' ref='scrollList'>
          <WrappedComponent items={items}/>
          {
            this.state.isBottomLoading && <Loading />
          }
        </div>
      }

      componentDidMount() {

        this.refs.scrollList.addEventListener('scroll', this.onScrollHandle.bind(this));
        initFetch()
        .then(res=>{
           this.setState({
             items: res
           })
        })
      }
    
      componentWillUnmount() {
          this.refs.scrollList.removeEventListener('scroll', this.onScrollHandle.bind(this));
      }
    }

    return WithScroll;
}

export default withScroll;
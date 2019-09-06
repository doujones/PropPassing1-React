import React, {Component} from 'react';
import './App.css';
import Comments from './CommentDetail'

  class App extends Component{
    state = {
      Hello: 'Will title'
    }
    changeWill = (newTitle) => {
      this.setState({title:newTitle})
    }


    render(){
      return(
        <div>
        <Comments hey={this.changeWill.bind(this, 'iWillChange')} title={this.state.title}/>
        </div>
      )
    }
  }
  
export default App;

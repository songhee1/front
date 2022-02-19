import Login from './components/Login';
import React, { Component } from 'react';
import Userpage from 'Userpage';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      userID:"",
      userPW:"",
      nickname:"",
      isLogin:true
    };
  }
  render(){
    
    return(
         
         <div>
           <Login 
           userid={this.state.userID}
           userpw={this.state.userPW}
           ></Login>
         <Userpage></Userpage>
         </div>
    );
  }
}


export default App;

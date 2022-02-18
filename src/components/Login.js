import React,{Component} from 'react';
import './Login.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      userID:"",
      userPW:"",
      nickname:"",
      isLogin:null
    };
  }
  //인풋 아이디값 
  inputID=(e)=>{
     this.setState({userID: e.target.value});
     
  }
  //인풋 비밀번호값
  inputPW=(e)=>{
    this.setState({userPW:e.target.value});
  }
  
  //로그인 버튼 클릭시 이벤트 발생
  submitHandler=(e)=>{
    e.preventDefault();
    
    fetch('login api 주소',{ 
      method:'post',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
      id:this.state.userID,
      pw:this.state.userPW
    })//문자열로 전달 
  })
    .then(response=>response.json())
    .then(response=>{
      if(response.token){
         localStorage.setItem("wtw-token",response.token);
         this.props.history.push("/main_gh");

      }else if(!response.token){
        alert("회원이 아닙니다");
        this.props.history.push("/signup_gh");
      }
    });
  }
    render(){

        return(
          <div class="login_total" >
          {/* 로그인 폼 */}
          <form class="login_total_foam"
           onSubmit={this.submitHandler} >
           <label><h2>Login</h2></label>
           <input type="text" name="id"  placeholder='아이디'
             onChange={this.inputID}  
             value={this.state.userID} />            
           <input type="password" name="password"  placeholder='비밀번호' 
             onChange={this.inputPW}
             value={this.state.userPW}/> 
          {/* 로그인 버튼 */}
           <button type="submit" href="/">로그인</button>
           
          </form>
        
          {/* 하단 바 */}
          <button href="/idfind">아이디 찾기</button>
           <button href="/pwfind">비밀번호 찾기</button>
           아직 계정이 없으신가요? <button >회원가입</button>
         </div>
        )
      }
    }

export default Login;
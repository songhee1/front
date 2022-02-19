import React,{Component} from 'react';

class Login extends Component{
  
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
      //로그인 key와 value 값
      body:JSON.stringify({
      id:this.props.userid,
      pw:this.props.userpw
    }) 
  })
    .then(response=>response.json())
    .then(response=>{
      if(response.ACCESS_TOKEN){
         localStorage.setItem("login-token",response.ACCESS_TOKEN);
         this.props.history.push("/main_gh");

      }else if(!response.ACCESS_TOKEN){
        alert("회원이 아닙니다");
        //Login 컴포넌트 그대로 위치
        this.props.history.push("/signup_gh");
      }
    });
  }
  render(){
        return(
          <div class="login_total" >
          {/* 로그인 폼 */}
           <form  
           onSubmit={this.submitHandler} >
           <label><h2>Login</h2></label>
           <input 
           type="text" 
           name="id"  
           placeholder='아이디'
           onChange={this.inputID}  
           value={this.state.userID} />            
           <input 
           type="password" 
           name="password"  
           placeholder='비밀번호' 
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
        );
      }
    }

export default Login;
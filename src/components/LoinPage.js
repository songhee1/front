import { useEffect, useState } from "react";

function LoginPage(){
    const [id, setId]=useState("");
    const [password, setPassword]=useState("");
    const [submit, setSubmit]=useState(false);
    const SubmitForm=(e)=>{
        e.preventDefault();
        console.log(id);
        console.log(password);
        setSubmit(true);
    }
    const idWrite=(e)=>{
        setId(e.target.value);
    }
    const pwWrite=(e)=>{
        setPassword(e.target.value);
    }

    const checkout=()=>{
     const sendIdPw= async ()=>(
        await fetch('login api 주소',{ 
        method:'post',
        headers:{
          'Content-type':'application/json'
        },
        //로그인 key와 value 값
        body:JSON.stringify({
        id:this.props.userid,
        pw:this.props.userpw
      })}));
    
      const checkIdPw= async()=>{
       await sendIdPw
      .then(response=>response.json())
      .then(response=>{
        if(response.ACCESS_TOKEN){
           localStorage.setItem("login-token",response.ACCESS_TOKEN);
           this.history.push("/main_gh");
  
        }else if(!response.ACCESS_TOKEN){
          alert("회원이 아닙니다");
          //Login 컴포넌트 그대로 위치
          this.props.history.push("/signup_gh");
        }       
        })};
    }

   useEffect(checkout,[submit]);

   const handleIdClick=()=>{
       window.location.href="/findoutId";
   }
   const signUp=()=>{
       window.location.href="/signupPage";
   }
    return(
        <div>
            <h1>대학생 SNS 캠퍼스픽</h1>
            <form onSubmit={SubmitForm}>  
            <input type="text" value={id} onChange={idWrite} placeholder="아이디"></input>
            <input type="password" value={password} onChange={pwWrite} placeholder="비밀번호"></input>
            <div>
             <button type="submit">로그인</button>
            </div>
            </form>
            <button onClick={handleIdClick}>아이디찾기</button>
            <button>비밀번호 찾기</button>
            <div> 아직 계정이 없으신가요? </div>
            <button onClick={signUp}>회원가입</button>
            
        </div>
    );
}
export default LoginPage;

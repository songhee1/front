import React, {Component} from 'react';
import Login from 'Login';

class Userpage extends Component{
   
    render(){
      const onChangeNickname=(e)=>{
          e.preventDefault();
          var result=window.confirm("닉네임을 변경하시겠습니까?");
          if(result){
            document.location.href="/changeNickname-page";  
           
        }
    }
    
        return(
            <div>
            <nav>
                회원정보 수정
                <button onClick={onChangeNickname} >닉네임 변경</button>
                <button>학교 인증</button>
                <button>회원 탈퇴</button>
            </nav>
            <button>뒤로가기</button>
            </div>
        );
    }
}

export default Userpage;
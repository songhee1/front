import React,{Component} from "react";

class ChangeNickname extends Component{


    NicknameChangeHandler(e){
        e.preventDefault();
        //input태그
        const input=document.querySelector('.newNickname');
        const value=input.value;
        //input 태그값 초기화
        input.value='';

        const data={
            nickname:value
        }
        
        //닉네임 변경 반영
        // axios.post('/nickname-change',{
        //    name:value 
        // })
        // .then((response)=>{
        //     location.reload()
        // })
    

        //닉네임 중복 확인
        fetch('user info router',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(json=>{
            if(json.exist===true){
                alert("이미 존재하는 닉네임입니다.");
            }else{
                 alert("사용가능한 닉네임입니다.");
                 
            }
        })
    }

    NicknameHandler(){
        
    }
render(){

        return(
              <div>
                  닉네임 변경하기
                  <input  
                  type="text"
                  placeholder="변경하고 싶은 닉네임 입력"
                  class="newNickname"
                  />
                   <button 
                   onClick={this.NicknameCheck}>중복확인</button>
                   <button 
                   onClick={this.NicknameChangeHandler}
                   class="changeNickname"
                   >변경하기</button>
                   <button>뒤로가기</button>
              </div>
        );
    }
}

export default ChangeNickname;
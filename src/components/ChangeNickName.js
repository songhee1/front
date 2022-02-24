import {useState, useEffect} from 'react';

function ChangeNickName(){
    const [newNickname, setnewNickname]=useState("");
    const [nickname, setNickname]=useState("");
    const [checkoutNewnickname, setCheckoutNewnickname]=useState(false);
    const writenickname=(e)=>{
        setnewNickname(e.target.value);
    }
    const checkNickname=(e)=>{
        e.preventDefault();
        
        fetch('user info router',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newNickname)
        })
        .then(res=>res.json())
        .then(json=>{
            if(json.exist===true){
                alert("이미 존재하는 닉네임입니다.");
                setnewNickname("");
            }else{
                 alert("사용가능한 닉네임입니다.");
                 setCheckoutNewnickname(true);
            }
        })
    }
    const NicknameChangeHandler=()=>{
        if(checkoutNewnickname===true){
           setNickname(nickname);
           alert('닉네임 변경 완료');
        } else{
            alert('닉네임 중복을 확인하세요');
        }
    }

    return(
        <div>
            <h2>닉네임 변경하기</h2>
            <input  
            type="text"
            placeholder="변경하고 싶은 닉네임 입력"
            value={newNickname}
            onChange={writenickname}/>
            <button 
            onClick={checkNickname}>중복확인</button>
            <button 
            onClick={NicknameChangeHandler}
            class="changeNickname">변경하기</button>
            <button>뒤로가기</button>
        </div>
        );
    }

export default ChangeNickName;

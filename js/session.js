//function session_set() { //세션 저장
    //let id = document.querySelector("#floatingInput");
	//let password = document.querySelector("#floatingPassword");
    //if (sessionStorage) {
       // let en_text = encrypt_text(password.value);
        //sessionStorage.setItem("Session_Storage_test", en_text);}
	//else {
       // alert("로컬 스토리지 지원 x");
   // }
//}

function session_set(){ //세션 저장(객체)
let id = document.querySelector("#floatingInput");
let password = document.querySelector("#floatingPassword");
let random = new Date(); // 랜덤 타임스탬프
const obj = { // 객체 선언
id : id.value,
otp : random
}
if (sessionStorage) {
const objString = JSON.stringify(obj); // 객체 -> JSON 문자열변환
let en_text = encrypt_text(objString); // 암호화
sessionStorage.setItem("Session_Storage_object", objString);
sessionStorage.setItem("Session_Storage_encrypted", en_text);
} else {
alert("세션 스토리지 지원 x");
}
}

function session_get() { //세션 읽기
    if (sessionStorage) {
       return sessionStorage.getItem("Session_Storage_encrypted");
    } else {
        alert("세션 스토리지 지원 x");
    }
}if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
        session_set(); // 세션 생성
        form.submit();
    }


function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href='index_login.html'; // 로그인된 페이지로 이동
    }
}


function session_del() {//세션 삭제
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else{
		alert("세션 스토리지 지원x");
	}
}
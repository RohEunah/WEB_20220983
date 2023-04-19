document.getElementById("search_btn").addEventListener('click', search_message);

var search_arry =[]; //빈 배열 - 전역 변수

function search_message(){
	let search_str = document.querySelector("#search_txt");
	if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 입력해주세요");
	}
	else{
		alert("검색어를 수행합니다!");
		search_arry.push(search_str.value); // 배열에 검색어 추가
		let text = document.getElementById("search_message").innnerHTML = search_arry.tostring();//값 변환
		document.querySelector("#from_main").submut();
	}
}

let empty1 = [ ]; // 빈 배열
let empty2 = [, , ,]; // 쉼표 개수 = 크기
let all = [1, 'test', 3.14]; // 다른 데이터 타입 사용 가능
let coffe = ['americano', 'latte']; // 이름, 괄호
const cars = ["Saab", "Volvo", "BMW"]; // 상수 배열 const 상수 선언 const 재선언 안됨
cars[0] = 'Jaab'; // 0번 인덱스 값 수정
//const cars = new Array("Saab", "Volvo", "BMW");
let car = cars[2]; // 변수에 배열 값 초기화
cars[1] = Date.now(); // 값에 객체 삽입 가능
console.log(cars); // 배열 출력
console.log(typeof cars); // 배열 타입 : 객체
//배열을 이용해서 

document.getElementById("search_message").innerHTML = cars; //cars라는 배열이 있어야 삽입 가능
//cars라는 배열 위에 let~~


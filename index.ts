// 변수 타입 지정
// 변수명 : 타입명
let name1 : string = "kim";


// array
let animals : string[] = ["dog", "cat"];


// object
let age : {age : number} = {age: 20}
let age2 : {age? : number} = {} // "?"를 사용한 경우, age 속성은 선택 사항이므로 이 속성이 없어도 오류가 발생하지 않음 - 빈 객체 {}도 유효한 값이 됨

// 옵셔널 속성을 사용하면 특정 속성이 반드시 존재하지 않아도 되는 경우에 대해 TypeScript의 타입 검사에서 오류가 발생하지 않도록 할 수 있음
// let age: { age?: number } = {}; 와 같이 옵셔널 속성을 사용하면 빈 객체 {}를 할당할 수 있음
// let age: { age: number } = {};와 같이 옵셔널 속성을 사용하지 않으면 해당 속성이 반드시 존재해야 하며, 그렇지 않으면 오류가 발생함



// 변수에 여러가지 타입의 데이터 할당
let name2 : string | number = "kim";

// type을 변수에 담아서 사용 가능
type nameType = string | number;
let name3 : nameType = "kim";


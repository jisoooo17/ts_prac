// 변수 타입 지정
// 변수명 : 타입명
let name1 = "kim";
// array
let animals = ["dog", "cat"];
// object
let age = { age: 20 };
let age2 = {}; // "?"를 사용한 경우, age 속성은 선택 사항이므로 이 속성이 없어도 오류가 발생하지 않음 - 빈 객체 {}도 유효한 값이 됨
// 옵셔널 속성을 사용하면 특정 속성이 반드시 존재하지 않아도 되는 경우에 대해 TypeScript의 타입 검사에서 오류가 발생하지 않도록 할 수 있음
// let age: { age?: number } = {}; 와 같이 옵셔널 속성을 사용하면 빈 객체 {}를 할당할 수 있음
// let age: { age: number } = {};와 같이 옵셔널 속성을 사용하지 않으면 해당 속성이 반드시 존재해야 하며, 그렇지 않으면 오류가 발생함
// 변수에 여러가지 타입의 데이터 할당
let name2 = "kim";
let name3 = "kim";
// 함수 파라미터와 리턴값 타입 지정
function test(x) {
    return x * 2;
}
console.log(test(123));
let john = [100, false];
let jane = {
    name: "kim",
    age: 20
};
let lee = {
    age: 20,
    weight: 100
};
// class 타입 설정
// 괄호 내에 미리 name 이렇게 변수를 만들어놔야 constructor 안에서 this.name 이렇게 사용가능
class Person {
    constructor(name) {
        this.name = name;
    }
}

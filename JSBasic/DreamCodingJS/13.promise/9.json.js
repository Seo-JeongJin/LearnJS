// JSON: JavaScript Object Notation -> 데이터를 텍스트로 표현하는 규칙
// -> 함수, undefined, Symbol 등의 데이터 타입은 포함될 수 없음 -> 모든 프로그래밍 언어에서 공통적으로 사용할 수 있는 텍스트 형식이어햐 하기 때문
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON -> object를 json 으로 변환
// parse(JSON): object -> json을 obejct 로 변환
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie); // { name: 'ellie', age: 20, eat: [Function: eat] }
console.log(json); // {"name":"ellie","age":20}

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: 'ellie', age: 20 }

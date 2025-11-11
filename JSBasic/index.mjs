
// import {} from "파일 경로";

// 일반 문법
import {pi, sum} from "./math.js";
// default export 문법
import message from "./app.js"; // export default 이므로 {} 필요 없음

console.log(pi);
console.log(sum(10, 20));
console.log(message);

// import 라이브러리이름 from "라이브러리이름";
import lodashLibrary from "lodash";

console.log(lodashLibrary);


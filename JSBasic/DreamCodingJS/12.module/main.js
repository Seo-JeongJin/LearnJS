// import { increase as increase1 } from './counter.js'; // 그냥 export 문법
// import { increase, getCount } from './counter.js'; // 그냥 export 문법
import * as counter from './counter.js'; // 지정한 경로로부터 모든 것들을 counter라는 이름으로 가지고 오겠다.
// import decrease1 from './counter.js'; // export default 문법 -> export된 것 변수 맘대로 지정 가능

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());

// counter.decrease1();
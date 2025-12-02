// Bubbling up, Propagating 🧼
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error; // 다시 에러 던지기 -> 다시 catch 있는 곳까지 던져짐
  }
}

function c() {
  b();
}

try {
  c(); // c 호출 -> b 호출 -> a 호출 -> 에러 던짐 -> 호출 타고 올라온 역순으로 다시 에러가 타고 내려감 -> 어디서 에러 잡을건지 정할 수 있음
} catch (error) {
  console.log('Catched!');
}
console.log('done!');

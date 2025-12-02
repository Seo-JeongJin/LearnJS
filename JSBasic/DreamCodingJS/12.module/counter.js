let count = 0;
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}

export default function decrease() { // export default는 파일에서 한 번만 쓸 수 있음
  count -= 1
  console.log(count);
}

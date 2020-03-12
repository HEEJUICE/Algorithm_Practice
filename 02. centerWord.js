// 가운데 글자를 가져온다.
// string이 홀수면 가운데 글자 1개만 가져온다.
// 짝수면 가운데 2글자를 가져온다.

function solution(s) {
  return s.length % 2 !== 0 // 만약 string을 2로 나누었을 때 0이 아니면(홀수면)
    ? s[Math.floor(s.length / 2)] // (홀수가 맞으면) s의 index값으로 스트링을 2로 나누고 그 값을 내림한다. ex 5 / 2 = 2.5 => 2
    : //다섯글자가 있으면 index 2의 문자를 가져옴
      s[s.length / 2 - 1] + s[s.length / 2]; // (짝수면) s의 index값으로 2로 나누고 -1을 뺀 값과 (ex 6 / 2 = 3 - 1 => 2) 2로 나눈 값 두 개를 더한다(3) => 2, 3번 째
}

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// 1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 3. 2에서 나온 배열의 3번째 숫자는 5입니다.

// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// ! 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

function solution(array, commands) {
  var answer = []; // 답을 넣을 빈 어레이를 지정해준다.

  for (let i = 0; i < commands.length; i++) {
    // commands를 for문을 돌면서 index값을 탐색할 수 있게 한다.
    let list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });
    // array를 command의 숫자값(인덱스값)대로 짤라준다 -> slice 사용
    // slice 첫 번째 인자로 commands의 i번 째 어레이 안의 인덱스 0 - 1을 넣어준다. -1을 하는 이유는 자바스크립트는 0번부터 시작하는데 여기서 시작값은 1로 계산해야 하기 때문이다.
    // command[i][0]이 2라면 사실상 array의 1부터 짜르는 것이다.
    // 두 번째 인자로는 그대로 commands[i][1]을 넣어준다. slice는 첫 번째 인자는 포함하고, 두 번째 인자는 그 전 인덱스까지 자름. 그래서 인덱스 값을 빼줄 필요가 없음.

    // slice를 했으면 자른 후 오름차순 정렬한다. sort a - b 하면 오름차순 정렬함.
    // list라는 변수명에 담는다.

    answer.push(list[commands[i][2] - 1]); // answer 어레이에 아까 자르고 정렬한 list 배열에서 commands[i][2] - 1의 index값을 가져온다.
  }

  return answer;
}

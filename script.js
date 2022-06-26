window.onload = function () {
  // 참가자 수를 입력받아 화면에 렌더링하기
  const number = Number(prompt("참가자는 모두 몇 명입니까?"));

  const total = document.querySelector(".total");
  total.textContent = number;

  // 사용자가 취소를 누르면 아래 코드가 실행되지 않는다.
  if (number === null) {
    return;
  }

  // 제시어 저장
  let word;

  // 새로운 입력 단어 저장
  let newWord;

  // 순서를 렌더링하는 위치
  const orderPlace = document.getElementById("order");

  // 순서 저장
  let order = Number(orderPlace.textContent);

  // 제시어를 렌더링하는 위치
  const wordPlace = document.getElementById("word");

  // 사용자가 입력하는 단어를 새로운 입력 단어로 저장.
  const $input = document.querySelector("input");
  $input.addEventListener("input", (event) => {
    newWord = event.target.value;
  });

  // 버튼을 저장.
  const $button = document.querySelector("button");

  // 버튼을 눌렀을 때
  const buttonClicked = () => {
    // 제시어 자리가 비어있다면
    if (!word) {
      // 만약 새로운 입력 단어가 3글자를 초과하면 경고창을 띄운다.
      if (newWord.length !== 3) {
        alert("세글자 단어를 입력해 주세요!");
        // 입력창을 비운다.
        $input.value = "";
      } else {
        // 새로운 입력 단어를 제시어 자리에 렌더링한다.
        word = newWord;
        wordPlace.textContent = word;

        // 순서에 +1을 한다.
        order++;
        orderPlace.textContent = order;

        // 입력창을 비운다.
        $input.value = "";
      }
      // 제시어 자리가 비어있지 않은 경우
    } else {
      // 만약 새로운 입력 단어가 3글자를 초과하면 경고창을 띄운다.
      if (newWord.length !== 3) {
        alert("세글자 단어를 입력해 주세요!");
        // 입력창을 비운다.
        $input.value = "";
      }

      // 제시어의 마지막 글자와 새로운 입력 단어의 첫 글자가 동일하면
      if (word[word.length - 1] === newWord[0]) {
        // 새로운 입력 단어를 제시어 자리에 렌더링한다.
        word = newWord;
        wordPlace.textContent = word;

        // 순서에 +1을 한다.
        order++;
        if (order > number) {
          // 순서가 참가자 수를 넘어가면 다시 1로 돌아온다.
          order = 1;
          orderPlace.textContent = order;
        } else {
          orderPlace.textContent = order;
        }
        $input.value = "";
      } else {
        //제시어의 마지막 글자와 새로운 입력 단어의 첫 글자가 다르면
        alert("입력한 단어를 다시 확인해 주세요!");
      }
    }
  };

  $button.addEventListener("click", buttonClicked);
};

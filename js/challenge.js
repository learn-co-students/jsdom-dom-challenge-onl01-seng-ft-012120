const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const list = document.getElementById("list");
const likes = document.querySelector(".likes");
const submit = document.getElementById("submit");
const comment = document.getElementById("comment-input");
const numberLikes = {};

function starTimer() {
  increase = setInterval(() => {
    counter.innerText++;
  }, 1000);
}
function stopTimer() {
  clearInterval(increase);
}

function disableButtons(boolean) {
  heart.disabled = boolean;
  minus.disabled = boolean;
  plus.disabled = boolean;
}

minus.addEventListener("click", function () {
  counter.innerText--;
});

plus.addEventListener("click", function () {
  counter.innerText++;
});

heart.addEventListener("click", function () {
  let number = counter.innerText;
  numberLikes[number] ? numberLikes[number]++ : (numberLikes[number] = 1);
  let li = document.createElement("li");
  li.innerText = `the ${number} has ${numberLikes[number]}`;
  likes.removeChild(likes.lastElementChild);
  likes.appendChild(li);
});

pause.addEventListener("click", (e) => {
  if (e.target.innerText == "resume") {
    starTimer();
    e.target.innerText = "pause";
    disableButtons(false);
  } else {
    stopTimer();
    e.target.innerText = "resume";
    disableButtons(true);
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (comment.value) {
    const p = document.createElement("p");
    p.innerText = comment.value;
    list.appendChild(p);
    comment.value = "";
  }
});

starTimer();

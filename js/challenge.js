// Counter Variables
let counterDisplay = document.querySelector("#counter");
let incrementBtn = document.querySelector("#plus");
let decrementBtn = document.querySelector("#minus");
let pauseBtn = document.getElementById("pause");
let heartBtn = document.querySelector("#heart");
let numHearts = document.querySelector(".likes");


// Comment Variables
const commentForm = document.getElementById("comment-form");
const commentTextArea = document.getElementById("comment-input");
let submitBtn = document.querySelector("#submit");


// Functions 
function addToCounter() {
  counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
}

let setTimer = setInterval(addToCounter, 1000);


const addComment = comment => {
   document.getElementById("list").appendChild(comment);
};

const createComment = event => {
  event.preventDefault();
  
  let newCommentInput = document.getElementById("comment-input");
  const newComment = document.createElement("li");
  
  newComment.innerText = newCommentInput.value;
  
  addComment(newComment);
  event.target.reset();
};

function disableOrEnableButtons() {
  let buttons = [incrementBtn, decrementBtn, heartBtn, submitBtn];
  
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled === false) {
      buttons[i].disabled = true;
      pauseBtn.innerText = "resume";
    }
    
    else {
      buttons[i].disabled = false;
      pauseBtn.innerText = "pause";
    }
  }
}

function stopOrResumeCount() {
  if (incrementBtn.disabled === false) {
    clearInterval(setTimer);
    disableOrEnableButtons();
  }
  
  else {
    setTimer = setInterval(addToCounter, 1000);
    disableOrEnableButtons();
  }
}


// Counter Functionality
setTimer;

// Comment Functionality
commentForm.addEventListener("submit", createComment);

// Pause Button Functionality
pauseBtn.addEventListener("click", stopOrResumeCount);

// Like Button Function
heartBtn.addEventListener("click", () => {
    numHearts.innerText = `<p>${counterDisplay.innerText}<p>`;
});

// Increment 
incrementBtn.addEventListener("click", () => {
  let counterDisplay = document.querySelector("#counter");
  let amt = parseInt(counterDisplay.textContent);
  amt++;
  counterDisplay.innerText = amt;
});

// Decrement 
decrementBtn.addEventListener("click", () => {
  let counterDisplay = document.querySelector("#counter");
  let amt = parseInt(counterDisplay.textContent);
  amt--;
  counterDisplay.innerText = amt;
});



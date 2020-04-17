let stopWatch = setInterval(incrementTimer, 1000);

let pause = false
const pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function(){
    if (pause == false){
        pause = true;
    }
    else {
        pause = false;
    }
});

function incrementTimer() {
    if (!pause){
        const timer = document.getElementById('counter');
        let count = parseInt(timer.innerText, 10) + 1;
        timer.innerText = `${count}`;
    };
};

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', decreaseTimer);

function decreaseTimer(){
    const timer = document.getElementById('counter');
    let count = parseInt(timer.innerText, 10) - 1;
    timer.innerText = `${count}`;
}

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', increaseTimer);

function increaseTimer(){
    const timer = document.getElementById('counter');
    let count = parseInt(timer.innerText, 10) + 1;
    timer.innerText = `${count}`;
}

const likeButton = document.getElementById('heart');
likeButton.addEventListener('click', addLike);

function addLike(){
    const timer = document.getElementById('counter');
    let number = timer.innerText;
    const list = document.querySelector('ul.likes')
    if (document.getElementById(`${number}`)){
        element = document.getElementById(`${number}`);
        likes = parseInt(element.innerText.match(/\d+(?= like)/), 10) + 1;
        element.innerHTML = `${number} has ${likes} likes.`;
    }
    else {
        const element = document.createElement('li');
        let likes = 1
        element.setAttribute('id', `${number}`)
        element.innerHTML = `${number} has ${likes} like.`;
        list.appendChild(element);
    };
}

const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list')
const commentButton = document.getElementById('submit');

commentButton.addEventListener("click", function(event){
    event.preventDefault();
});

commentButton.addEventListener("click", addComment);

function addComment(){
    let comment = commentInput.value;
    let element = document.createElement('li');
    element.innerHTML = comment;
    commentList.appendChild(element);
}
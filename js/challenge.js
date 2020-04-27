let counter = document.querySelector("#counter");
let pause = document.querySelector("#pause");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let heart = document.querySelector("#heart");
let likes = document.querySelector(".likes");
let commentForm = document.querySelector("#comment-form");
let comment = document.querySelector("#comment-input");
let comments = document.querySelector("#list");
// set timeout is only for one execution, use set interval to repeat
function startCounter() {
     window.setInterval(function(){counter.innerText++;}, 1000);
}


plus.addEventListener("click", function() {
    counter.innerText++;
})
minus.addEventListener("click", function() {
    counter.innerText--;
})

heart.addEventListener("click", function() {
    let number = counter.innerText;
    let doesExist = loopThroughExistingLikes(number);
    if (doesExist != false) {
        addToExistingLike(number, doesExist)
    } else {
        addNewLike(number);
    }
})

function addNewLike(number) {
    let element = document.createElement('li');
    let numbLikes = 1;
    element.setAttribute('id', `${number}`);
    element.innerHTML = `${number} has ${numbLikes} likes.`;
    likes.appendChild(element);
}

function addToExistingLike(number, li) {
    let newArray = li.innerHTML.split(" ");
    let numbLikes = parseInt(newArray[2]);
    numbLikes += 1 ;
    li.innerText = `${number} has ${numbLikes} likes.`;
}

function loopThroughExistingLikes(number) {
    let li = likes.querySelectorAll('li');
    if (li.length != 0) {
        for (let i = 0; i < li.length; i ++) {
            if (li[i].id == number) {
                return li[i]; }}
   }  
            return false; 
    }


function disableButtons(boolean) {
    heart.disabled = boolean;
    minus.disabled = boolean;
    plus.disabled = boolean;

}



// change the value of pause button when clicked.
pause.addEventListener("click", function(e) {
    if (e.target.innerText == "resume") {
        startCounter();
        // myTimer();
        disableButtons(false);
        e.target.innerText = "pause";
    } else {
        // clearInterval();
        e.target.innerText = "resume";
        disableButtons(true);
    }
})
let ul = document.createElement('ul');
comments.appendChild(ul);
document.addEventListener("DOMContentLoaded", () => {
    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let item = document.createElement('li');
        ul.appendChild(item);
        item.innerHTML = comment.value;

    })
})


startCounter();
// myTimer();
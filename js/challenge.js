const counter = document.getElementById("counter");
let x = 0;

const pause = document.getElementById("pause");

function interval() {
    if (pause.innerText == "pause") {
        counter.innerText = parseInt(counter.innerText) + 1;
    }
}

setInterval(interval, 1000);


const minus = document.getElementById("minus");
minus.addEventListener("click", function() {
    if (parseInt(counter.innerText) > 0) {
        if (pause.innerText == "pause") {
            counter.innerText = parseInt(counter.innerText) - 1;
        }
    }
});

const plus = document.getElementById("plus");
plus.addEventListener("click", function() {
    if (pause.innerText == "pause") {
        counter.innerText = parseInt(counter.innerText) + 1;
    }
});

pause.addEventListener("click", function() {
    if (pause.innerText == "pause") {
        pause.innerText = "resume";
    } else {
        pause.innerText = "pause";
    }
});

const likes = document.getElementById("heart");
const ul = document.getElementsByClassName("likes")[0]

likes.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = "Like";
    ul.appendChild(li)

});

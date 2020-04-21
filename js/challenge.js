document.addEventListener("DOMContentLoaded", function() {
    const counter = document.querySelector("#counter");
    const likesList = document.querySelector(".likes")
    const heart = document.querySelector("#heart")
    const pause = document.querySelector("#pause")
    function incrementCounter() {
       let currentValue = parseInt(counter.innerText);
       counter.innerText = String(currentValue + 1);
    };
    function decrementCounter() {
        let currentValue = parseInt(counter.innerText);
        counter.innerText = String(currentValue - 1);
     };
    let intervalID = setInterval(incrementCounter, 1000);
    const plus = document.querySelector("#plus")
    const minus = document.querySelector("#minus")
    plus.addEventListener("click", function() {
        incrementCounter();
        event.preventDefault();
    });
    minus.addEventListener("click", function() {
        decrementCounter();
        event.preventDefault();
    });
    heart.addEventListener("click", function() {
        let currentValue = counter.innerText;
        function addLikeItem() {
            let item = document.createElement("LI");
            item.innerText = `${currentValue} has been liked 1 time.`;
            likesList.appendChild(item);
        }
        addLikeItem();
        event.preventDefault();
    })
    pause.addEventListener("click", function() {
        clearInterval(intervalID);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        pause.innerText = "resume";
        pause.id = "resume"
        let resume = document.querySelector("#resume")
        resume.addEventListener("click", function() {
            intervalID = setInterval(incrementCounter, 1000);
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            resume.innerText = "pause";
            resume.id = "pause"
            event.preventDefault();
        })
        event.preventDefault();
    })
    const commentInput = document.querySelector("#comment-input")
    const submit = document.querySelector("#submit")
    const comments = document.querySelector(".comments")
    submit.addEventListener("click", function() {
        newComment = document.createElement("P");
        newComment.innerText = commentInput.value;
        comments.appendChild(newComment);
        event.preventDefault();
    })
    
});



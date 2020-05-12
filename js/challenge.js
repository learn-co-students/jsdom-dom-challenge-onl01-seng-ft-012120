document.addEventListener("DOMContentLoaded", () => {
  const counterElem = document.getElementById("counter")
  const pauseElem = document.getElementById("pause")
  const plusElem = document.getElementById("plus")
  const minusElem = document.getElementById("minus")
  const heartElem = document.getElementById("heart")
  const commentFormElem = document.getElementById("comment-form")
  const commentInputElem = document.getElementById("comment-input")
  const commentListElem = document.getElementById("list")
  const likeList = document.querySelector(".likes")
  
  // 2 states pasued notPaused

  // paused
  // disabled all shit



  // not paused
  // enable all shit


  // pause listener
  // if isPaused paused()
  // else notPausesd()


  let counterVal = counterElem.innerText  

  let isPaused = false
  
  const showTimer = () => {
    if (!isPaused) {
      counterElem.innerText = counterVal++
    }
  }

  pauseElem.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      pauseElem.innerText = 'resume'
      plusElem.setAttribute("disabled", true)
      minusElem.setAttribute("disabled", true)
      heartElem.setAttribute("disabled", true)
    } else {
      pauseElem.innerText = 'pause'
      plusElem.removeAttribute("disabled")
      minusElem.removeAttribute("disabled")
      heartElem.removeAttribute("disabled")
    }
    
  });

  plusElem.addEventListener("click", () => {
    counterElem.innerText = counterVal++
  });

  minusElem.addEventListener("click", () => {
    counterElem.innerText = counterVal--
  });

  heartElem.addEventListener("click", () => {
    const x = counterVal
    const likedElem = document.getElementById(x)

    if (!likedElem) {
      const listItem = document.createElement('li')

      listItem.setAttribute("id", x)
      listItem.innerHTML = `${x} has <span class="count">1</span> like(s)`

      likeList.appendChild(listItem)
    } else {
      const countSpan = likedElem.querySelector('.count');
      countSpan.innerText++
    }
  });

  commentFormElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = commentInputElem.value;
    const commentItem = document.createElement('p')
    commentItem.innerText = value
    commentListElem.appendChild(commentItem)
    e.target.reset(); 
  });

  const timer = window.setInterval(showTimer, 1000)
  
});
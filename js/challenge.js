let count = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likeList = document.getElementsByClassName('likes')[0];
let pauseCond = false;

let commentForm = document.getElementById("comment-form");
let commentList = document.getElementById("list");
document.addEventListener("DOMContentLoaded", function(e){
 
        if(pauseCond === false){
            let likes = 0;
            let number = parseInt(count.innerText, 10);
            let time = window.setInterval(function(){
                if(pauseCond === false){
                    minus.addEventListener('click', function(e) {
                        if(pauseCond === false){
                            number--;
                            count.innerText = number;
                        }
                    });
                    plus.addEventListener('click', function(e){
                        if(pauseCond === false){    
                            number++;
                            count.innerText = number;
                        } 
                    });
                    number++;
                    count.innerText = number;
                }
            }, 1000);
            
            
            heart.addEventListener('click', function(e){
                if(pauseCond === false){
                    likes ++;
                    let lik = document.createElement('li');
                    lik.innerText = `${number} has been liked ${likes} times`;
                    likeList.appendChild(lik);
                }
            });
        }
        
        pause.addEventListener("click", function(e){
            console.log(pauseCond);
            pauseCond = !pauseCond;
        });

        commentForm.addEventListener('submit', function(e){
            e.preventDefault();
            let input = document.getElementById("comment-input");
            let newComment = document.createElement('p');
            newComment.innerText = input.value;
            commentList.appendChild(newComment);
        });


    
});
const box = document.getElementById("box")
const text = document.getElementById("text")
box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
})



box.addEventListener("keydown", function(event){
    text.textContent = `${event.key}`

    if (event.key == 1){
        text.textContent = "🤬"
    } else if(event.key == 2){
        text.textContent = "☹️"
    } else if (event.key == 3){
        text.textContent = "😐"
    }
      else if(event.key == 4){
    text.textContent = "🙂"
    } else if (event.key == 5){
    text.textContent = "😁"
    } else 
        text.textContent = "You must choose a number 1-5"
    
    })
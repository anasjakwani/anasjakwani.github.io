window.onload = function createElement() {
    for (let i = 0; i < 24; i++) {
        let bubbleDiv = document.getElementById("bubblediv");
        let bubble = document.createElement("div");
        bubbleDiv.appendChild(bubble)
        bubble.id = "bubbles" + i;
        bubble.setAttribute("onmouseover", "pop(bubbles" + i + ")")
        addClass(bubble)
    }
}


function addClass(bubble) {
     let random = Math.random() * 4 + 1;
        //console.log(~~random)
        if (~~random == 1) {
            bubble.className = "bubble bg-primary"
            
            return "bubble bg-primary"
        } else if (~~random == 2) {
            bubble.className = "bubble bg-secondary"
            
            return "bubble bg-secondary"
        } else if (~~random == 3) {
            bubble.className = "bubble bg-success"
            
            return "bubble bg-success"
        } else if (~~random == 4) {
            bubble.className = "bubble bg-danger"
            
            return "bubble bg-danger"
        } else if (~~random == 5) {
            bubble.className = "bubble bg-warning"
            
            return "bubble bg-warning"
        }
}


function pop(over) {
    over.className = "bubble"
    let para = document.createElement("p");
    over.appendChild(para)
    para.innerHTML = "POP"
    match(over)
    setTimeout(() => {
        para.innerHTML = ""
        over.className = addClass(over);
    }, 2000);
   
    
}
function match(i) {
    let matchColor = document.getElementById("matchcolor");
    if (matchColor.className.contains("bg-danger") = i.classList.contains("bg-danger")) {
        console.log("done")
    }
}


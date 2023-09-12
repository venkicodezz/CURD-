let a = document.querySelector('h1');

let Btn = document.getElementById("btn")

function change() {

    if (Btn.textContent.includes("Change")){
        Btn.textContent = "Bring back!"
        a.innerHTML = "Changed by DOM"
        a.style.color = "green"
        a.style.transition = "1s all"
    }else{
        Btn.textContent = "Change"
        a.innerHTML = "DOM Tutorials!"
        a.style.color = "blue"
    }
        
}
const buttons = document.querySelectorAll('.tap-link');
const contentColor = document.querySelector('.content-box')

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn => btn.classList.remove("active"))
    
        button.classList.add("active")

            switch (button.id) {
    case "tap1":
        contentColor.style.background = "black";
        break;
    case "tap2":
        contentColor.style.background = "red";
        break;
    case "tap3":
        contentColor.style.background = "blue";
        break;
    case "tap4":
        contentColor.style.background = "green";
        break;
    }
    })
})
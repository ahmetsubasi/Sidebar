let arrow = document.querySelectorAll('.arrow');
for(var i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;  
        arrowParent.classList.toggle("showMenu"); 
    });
}

let sideBar = document.querySelector('.sidebar')
let sideBarBtn = document.querySelector('.bx-menu')
console.log(sideBar);
sideBarBtn.addEventListener("click", () =>{
    sideBar.classList.toggle("close");
});
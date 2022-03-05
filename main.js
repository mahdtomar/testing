let btn = document.querySelector(".btn")
let img = document.querySelector(".img")

let myImages = ["imgs/active-states-bookmarked.jpg","imgs/active-states-default.jpg","imgs/active-states-modal-completed.jpg","imgs/active-states-modal-default.jpg","imgs/active-states-modal-selected.jpg","imgs/desktop-design.jpg","imgs/desktop-preview.jpg"]

btn.onclick = () =>{
    let currentImg = img.getAttribute("src")
    let currentIndex = myImages.indexOf(currentImg)
    if( currentIndex+1 == myImages.length){
        img.setAttribute("src",`${myImages[0]}`)
        
    }else{
        img.setAttribute("src",`${myImages[currentIndex + 1]}`)
    }
}
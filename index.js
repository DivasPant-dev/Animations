function moveUp() {
    let moveUp = document.getElementById("showcase");

    moveUp.classList.add("moveUp");

    setTimeout(function() {
        moveUp.classList.remove("moveUp")
    }, 4000);
}

function moveDown() {
    let moveUp = document.getElementById("showcase");

    moveUp.classList.add("moveDown");

    setTimeout(function() {
        moveUp.classList.remove("moveDown")
    }, 4000);
}

function moveRight() {
    let moveUp = document.getElementById("showcase");

    moveUp.classList.add("moveRight");

    setTimeout(function() {
        moveUp.classList.remove("moveRight")
    }, 4000);
}

function moveLeft() {
    let moveUp = document.getElementById("showcase");

    moveUp.classList.add("moveLeft");

    setTimeout(function() {
        moveUp.classList.remove("moveLeft")
    }, 4000);
}

function video() {
    var video = document.getElementById("video");

    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
}

function circle() {
    let circle = document.querySelector(".circle");

    circle.classList.add("left");

    setTimeout(() => {
        circle.classList.remove("left")
    }, 5000)
}

function triangle() {
    var triangle1 = document.querySelector(".triangle1");
    var triangle2 = document.querySelector(".triangle2");
    var triangle3 = document.querySelector(".triangle3");

    triangle1.classList.add("rotateLeft");
    triangle2.classList.add("rotateRight");
    triangle3.classList.add("after");
}
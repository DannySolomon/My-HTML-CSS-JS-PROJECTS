var box = document.getElementById("box");

box.style.top = Math.floor(Math.random()*50).toString() + "px";
box.style.left = Math.floor(Math.random()*50).toString() + "px";

box.addEventListener('mousemove', function(){
    let screen_height = window.innerHeight;
    let screen_width = window.innerWidth;

    let box_height = box.clientHeight;
    let box_width = box.clientWidth;

    box.style.top = Math.floor(Math.random()*(screen_height-box_height)).toString() + "px";
    box.style.left = Math.floor(Math.random()*(screen_width-box_width)).toString() + "px";
})
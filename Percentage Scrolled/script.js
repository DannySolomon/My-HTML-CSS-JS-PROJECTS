var percent = document.getElementById("percentage");

var page_height = document.documentElement.scrollHeight;
var viewport_height = window.innerHeight;
window.addEventListener('scroll',function(){
  percent.innerText = Math.round((this.window.pageYOffset / (page_height - viewport_height)) * 100);
});
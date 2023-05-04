var links = document.querySelectorAll('.nav-menu a');
var aboutposition;

for(let i = 0; i < links.length; i++)
{
    links[i].addEventListener('click', function (event){
        event.preventDefault();
        var targetelementhref = this.getAttribute("href");
        var targetelementname = targetelementhref.slice(1);
        var targetelement = document.getElementById(targetelementname);
        var scrollabout = setInterval(function (){
            aboutposition = targetelement.getBoundingClientRect();
            if(aboutposition.top<=0){
            clearInterval(scrollabout);
            return;
            }
            window.scrollBy(0,7);
        }, 1); 
    });
}

// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;
// console.log(navMenuAnchorTags);


// for(var i = 0; i < navMenuAnchorTags.length; i++)
// {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSection = document.getElementById('about');
//         //    interval = setInterval(scrollVertically, 20, targetSection);
//         interval = setInterval(function () {
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if (targetSectionCoordinates.top <= 0) {
//             clearInterval(interval);
//             return;
//             }
//             window.scrollBy(0, 50);
//         }, 20);
//     });
// }

// // function scrollVertically(targetSection) {
// //     var targetSectionCoordinates = targetSection.getBoundingClientRect();
// //     if (targetSectionCoordinates.top <= 0) {
// //         clearInterval(interval);
// //         return;
// //     }
// //     window.scrollBy(0, 50);
// // }
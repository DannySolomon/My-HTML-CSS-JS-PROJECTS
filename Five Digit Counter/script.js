// var countInterval;

// var button = document.getElementById("counter-button");
// button.addEventListener('click',startCounter);

// function startCounter() {

//     var number = parseInt(document.getElementById("number").value);
//     console.log(number);
//     var currentNo = document.querySelectorAll(".current");
//     var nextNo = document.querySelectorAll(".next");

//     if (isNaN(number)) {
//         alert("Please enter a number");
//         clearInterval(countInterval);
//         // This is important for the condition when a counter is running and you entered a wrong input for a new counter
//         resetNumbers(currentNo, nextNo, 5);
//         return;
//     }
//     if (number < 1 || number > 99999) {
//         alert("Range out of bounds");
//         clearInterval(countInterval);
//         resetNumbers(currentNo, nextNo, 5);
//         return;
//     }

//     var count = 0;

//     // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
//     resetNumbers(currentNo, nextNo, 5);
    
//     // Clears the previous interval that was running
//     clearInterval(countInterval);

//     countInterval = setInterval(function () {
//         if (count === number) {
//             clearInterval(countInterval);
//             alert("Counter has stopped");
//             return;
//         }
//         increaseCount(currentNo, nextNo, 4);
//         count++;
//     }, 1000);

// }



// function resetNumbers(currentNo, nextNo, end) {
//     for(let i = 0; i < end; i++)
//     {
//         currentNo[i].innerText = 0;
//         nextNo[i].innerText = 1;
//     }
// }



// function increaseCount(currentNos, nextNos, i) {
    
//     let currentNo = currentNos[i];
//     let nextNo = nextNos[i];

//     if (current.innerText == 9) {
//         increaseCount(currentNos, nextNos, i-1);
//     }

//     nextNo.classList.add("animate");

//     setTimeout(function () {
//         currentNo.innerText = nextNo.innerText;
//         nextNo.classList.remove("animate");
//         nextNo.innerText = parseInt(nextNo.innerText) + 1;
//         if(nextNo.innerText > 9)
//         {
//             nextNo.innerText = 0;
//         }
//     }, 500);

// }




// var countInterval;


// function startCounter()
// {

//     var number = parseInt(document.getElementById("number").value);

//     if (isNaN(number)) {
//         alert("Please enter a number");
//         clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
//         return;
//     }
//     if (number < 1 || number > 99999) {
//         alert("Range out of bounds");
//         clearInterval(countInterval);
//         return;
//     }

//     var currentNos = document.querySelectorAll(".current");
//     console.log(currentNos);
//     var nextNos = document.querySelectorAll(".next");
//     var count = 0;

//     // If user clicks on 'Start Counter' button again - remove this function and below line if you don't consider this situation
//     resetNumbers(currentNos, nextNos, 5);

//     // Clears the previous interval that was running
//     clearInterval(countInterval);

//     countInterval = setInterval(function ()
//     {
//         if (count === number) {
//             clearInterval(countInterval);
//             alert("Counter has stopped");
//             return;
//         }
//         increaseCount(currentNos, nextNos, 4);
//         count++;
//     }, 1000);

// }


// function resetNumbers(currentNos, nextNos, end)
// {
//     for (var i = 0; i < end; ++i) {
//         currentNos[i].innerText = 0;
//         nextNos[i].innerText = 1;
//     }
// }



// function increaseCount(currentNos, nextNos, index)
// {

//     let current = currentNos[index];
//     let next = nextNos[index];

//     if (current.innerText == 9) {
//         increaseCount(currentNos, nextNos, index - 1);
//     }

//     next.classList.add("animate");

//     setTimeout(function ()
//     {
//         current.innerText = next.innerText;
//         next.classList.remove("animate");
//         next.innerText = parseInt(next.innerText) + 1;
//         if (next.innerText > 9) {
//             next.innerText = 0;
//         }
//     }, 500);

// }

// var current = document.querySelector(".current");
// var next = document.querySelector(".next");
// var button = document.getElementById("counter-button");
// button.addEventListener('click',startCounter);

// var interval;
// function startCounter()
// {
//     interval = setInterval(animate,1000);
//     console.log("hello");
// }

// function animate()
// {
//     next.classList.add("animate");
//     setTimeout(function(){
//         next.classList.remove("animate");
//         console.log("remove");
//         clearInterval(interval);
//     },500);
//     return;
// }




var countInterval;

var button = document.getElementById("counter-button");
button.addEventListener('click',startCounter);

function startCounter() {

    var number = parseInt(document.getElementById("number").value);
    console.log(number);
    var currentNo = document.querySelector(".current");
    var nextNo = document.querySelector(".next");

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);
        // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        resetNumbers(currentNo, nextNo);
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        resetNumbers(currentNo, nextNo);
        return;
    }

    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo, end) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}



function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}

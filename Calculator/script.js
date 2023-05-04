var display = document.getElementById('display-text');
var buttonclick = document.getElementsByClassName('button'); 


for(var i = 0; i < buttonclick.length; i++)
{
    buttonclick[i].addEventListener("click",function (){
        var value = this.getAttribute('data-value');
        
        if(display.innerText == "Invalid Input" || display.innerText == "undefined" || display.innerText == "Infinity" || display.innerText == "NaN")
        {
            display.innerText= "";
        }
        if(value== 'clearall')
        {
            display.innerText = "";
        }
        if(value == '=')
        {
            var a = display.innerText;
            try{
                display.innerText = eval(a);
            }
            catch(e)
            {
                if(e instanceof SyntaxError)
                {
                    display.innerText = "Invalid Input";
                }
            }
        }
        if(value=='sign')
        {
            if(display.innerText != "")
            {
                var a = display.innerText;
                try{
                    var b = eval(a);
                    display.innerText = b*-1;
                }
                catch(e)
                {
                    if(e instanceof SyntaxError)
                    {
                        display.innerText = "Invalid Input";
                    }
                }
            }
        }
        if(value == 'clear')
        {
            var c = display.innerText;
            display.innerText = c.slice(0,c.length-1);
        }
        if(value!= 'sign' && value!= '=' && value!= 'clearall' && value!='clear')
        {
            display.innerText+=value;
        }
    });
}

// buttonclick.foreach(x=>x.addEventListener('click',function(){
//     var value = x.getAttribute('data-value');
//     display.innerText+=value;
// }));


// document.addEventListener("keypress", function(event) {
//     var key;
//     key =  event.keyCode;
//     value = String.fromCharCode(key);
//     console.log(key+" "+value);
//     var numArray = [1,2,3,4,5,6,7,8,9,0];


//     if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
    
//             operator = value;
//             operand1 = parseFloat(display.innerText);
//             display.innerText = null;
//     }

//     else if(key == '13'){
//         if(operator != null){
//             operand2 = parseFloat(display.innerText);
//             display.innerText = eval(operand1+" "+operator+" "+operand2);
//         }
//         else{
//             display.innerText = "Error";
//         }
//     }

//     else if(value == '.') {
//         if(display.innerText.length && !display.innerText.includes('.') ) {
//             display.innerText += value;
//         }
//     }

//     else if(value in numArray){
//         display.innerText += value;
//     }
// })


// // For Clearing display with delete Key 

// document.addEventListener("keydown", function(event) {
//     var key;
//     key =  event.keyCode;

//     if(key == '8') {
//         display.innerText = null;
//     }
// });

//for keyboard
var operators = ["+", "-", "x", "÷", "^"];
// Set decimal flag for use later
var decimalAdded = false;

document.onkeydown = function (event) {
  var key_press = String.fromCharCode(event.keyCode);
  var key_code = event.keyCode;
  var input = document.querySelector("#display-text");
  var inputVal = input.innerHTML;
  var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
  // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively.

  // i dont think the below is necessary
//   equation = equation
//     .replace(/x/g, "*")
//     .replace(/÷/g, "/")
//     .replace(/\^/g, "**");

  // Target each keypress and update the input screen

  if (key_press == 1) {
    input.innerHTML += key_press;
  }
  if (key_press == 2) {
    input.innerHTML += key_press;
  }
  if (key_press == 3 || key_code == 32) {
    input.innerHTML += key_press;
  }
  if (key_press == 4) {
    input.innerHTML += key_press;
  }
  if (key_press == 5) {
    input.innerHTML += key_press;
  }
  if (key_press == 6 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 7) {
    input.innerHTML += key_press;
  }
  if (key_press == 8 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 9) {
    input.innerHTML += key_press;
  }
  if (key_press == 0) {
    input.innerHTML += key_press;
  }

  // Cature operators and prevent from addint two consecutuve operators

  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 187 &&
      event.shiftKey) ||
    key_code == 107 ||
    (key_code == 61 && event.shiftKey)
  ) {
    document.querySelector("#display-text").innerHTML += "+";
  }
  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 189 &&
      event.shiftKey) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 107)
  ) {
    document.querySelector("#display-text").innerHTML += "-";
  }
  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 56 &&
      event.shiftKey) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 106)
  ) {
    document.querySelector("#display-text").innerHTML += "x";
  }
  if (
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 191) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 111)
  ) {
    document.querySelector("#display-text").innerHTML += "÷";
  }
  if (
    inputVal != "" &&
    operators.indexOf(lastChar) == -1 &&
    key_code == 54 &&
    event.shiftKey
  ) {
    document.querySelector("#display-text").innerHTML += "^";
  }
  if (key_code == 13 || (key_code == 187 && event.shiftKey == false)) {
    input.innerHTML = eval(equation);
    //reset decimal added flag
    decimalAdded = false;
  }
  if (key_code == 46) {
    input.innerHTML = "";
    decimalAdded = false;
  }
  if(key_code == 8)
  {
    var h = input.innerHTML;
    input.innerHTML = h.slice(0,h.length-1);
  }
};
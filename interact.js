// variable stores previous number inputted. 

var val;
var operator;
var currentVal;
var answer;

//function adds numbers.
const add = function(num1,num2) {
	console.log(parseInt(num1)+parseInt(num2));
    return val = Math.round((parseFloat(num1)+parseFloat(num2))*1000000)/1000000;
};

//function subtracts numbers.
const subtract = function(num1,num2) {
  console.log(num1-num2);
  return val=Math.round((num1-num2)*1000000)/1000000  
  ;
};

//function multiplies numbers.
var res=1;
const multiply = function(num1,num2) {
  console.log(num1*num2);
  return val=Math.round((num1*num2)*1000000)/1000000  
  ;
};

//function divides numbers.
const divide = function(num1,num2){
    if (num2==0){
        return "to infinity and beyond..";
    }
    console.log(parseInt(num1)/parseInt(num2));
    return val = Math.round(parseInt(num1)/parseInt(num2)*1000000)/1000000;
}

// function to perform arithmetic operations based on operator. 
var perform;
const operate = function(symbol,num1,num2){
    switch (symbol){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

// function that is trigerred when numbers are clicked. 
var btn = document.querySelectorAll(".num");
btn.forEach(elem=>{
    elem.addEventListener("click",()=>present(elem))
});

//DOM manipulation selecting display screen
var disp = document.querySelector("#display");


//function to display numbers on screen.
function present(element){
    var num = element.textContent;
    if(!answer){
        disp.textContent+=num;
        currentVal=disp.textContent;
        answer="";
        // currentAns="";
        return currentVal;
    }

    else {
        disp.textContent=num;
        currentVal=disp.textContent;
        return currentVal;
    }

    
}


var btn = document.querySelectorAll(".oper");
btn.forEach(elem => {
    elem.addEventListener("click",()=>{
    if (!operator){
        operator = elem.textContent;
    }

    if (val){
        currentAns=(operate(operator,val,currentVal));
        console.log(currentAns);
    }
    else { val = currentVal}   
    operator = elem.textContent;
    disp.textContent="";
    currentVal="";
    answer="";
    clear();
    })
})

var calc = document.querySelector("#equal")
calc.addEventListener("click",()=>{
    answer=(operate(operator,val,currentVal));
    disp.textContent=answer;
    operator ="";
    currentVal=val;
    val="";
})

function clear(){
    disp.textContent="";
}

function clearVal(){
    val="";
    currentVal="";
}

var reset = document.querySelector("#ac")
reset.addEventListener("click",()=>{
    clearVal();
    clear();
    answer="";
})


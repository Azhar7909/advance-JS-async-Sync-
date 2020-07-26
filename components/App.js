
/*  ASyncronus (
                    is a means of parallel programming 
                    in which a unit of work runs separately
                    from the main application thread and notifies 
                    the calling thread of its completion, 
                    failure or progress
                ) 
        &
    Syncronus (
                Line by line execution
            ) Example
    Js is Syncronus 
*/ 

console.log("Start Group");

function breakFast() {
    console.log("Break Fast Complete");
}
setTimeout(() => {
    breakFast()
    
}, 100);
morningg()

function morningg() {
    console.log("Break Fast Start");
}

console.log("End Group");



/* 
    Call Back (call function and function call another function)

*/
// morning afterNoone evening night





function alertGreeting(msg) {
    alert(msg)
}

function printGreeting(msg, alertGreeting){
    if (msg === "morning") {
        morning(alertGreeting)
    }else if(msg === "afterNoone") {
        goodAfterNooon(alertGreeting)

    }else if(msg === "evening") {
        goodEvening(alertGreeting)
    
    }else if(msg === "night") {
        goodNight(alertGreeting)
    }
}

function morning(alertGreeting) {
    alertGreeting("Good Morning")
}
function goodAfterNooon(alertGreeting) {
    alertGreeting("Good After Nooon")
}
function goodEvening(alertGreeting) {
    alertGreeting("Good Evening")
}
function goodNight(alertGreeting) {
    alertGreeting("Good Night")
}
// morning afterNoone evening night

printGreeting("afterNoone",alertGreeting)




// Promise ///////////////////////////////////////////

// just consider Api call
const asyncFunction = () => {
    return (((Math.floor(Math.random()* 10 )) % 2) === 0) ? true : false
}


let promise = new Promise((resolve, reject) => {
    setTimeout(() => (
        asyncFunction() ? resolve() : reject()
    ), 2000);
})

promise.then(success).catch(failur);

console.log("hello world");

function success() {console.log("success")}
function failur() {console.log("failur")}

// first then jo return krega wo second wale then ka wo input bnega === then tree we use for dependent case then then & then
promise.then(function() {
    console.log("First then success");
    return 2;
})
.then(function (val) {
    console.log(val);
    return val + 8;
})
.then(function (val2) {
    console.log(val2);
})

promise.catch(function () {
    console.log("Failur Second promise");
})
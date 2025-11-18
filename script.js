// setTimeout and setInterval 
// setTimeout is used to execute a function after a specified delay, while setInterval is used to repeatedly execute a function at specified intervals.
// setTimeout mtlb delay
// setTimeout(function(){
//     console.log("hello 3");
// },3000); // 1000ms = 1 second
// setTimeout(function(){
//     console.log("hello 1");
// },1000);
// setTimeout(function(){
//     console.log("hello 2");
// },2000);


// var btn = document.querySelector("button");
// var h1 = document.querySelector("h1");
// btn.addEventListener("click", function(){
//     h1.innerHTML = "Loading...";
//     setTimeout(function(){
//         h1.innerHTML = "Hello I'm Mannu";
//     },2000);
// });


// setInterval - controlled repetition with intervals
var a = 0;
var int = setInterval(function(
){
    a++;
    console.log("Hello " + a);

}, 100)

setTimeout(function(){
    clearInterval(int); // to stop the interval after first execution..
}, 4000);
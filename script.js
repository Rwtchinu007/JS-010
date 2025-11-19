var btn = document.querySelector("button");
var inner = document.querySelector(".inner");
var h2 = document.querySelector("h2");
var grow = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  var num = 50 + Math.floor(Math.random() * 50);
  console.log(`your file will be ready in ${num/10} seconds`);
  var interval = setInterval(function () {
    grow++;
    // console.log(grow);
    inner.style.width = grow + "%";
    h2.innerText = grow + "%";
  }, num);
  setTimeout(function () {
    clearInterval(interval);
    btn.innerHTML = "Done";
    btn.style.opacity = "0.5";
  }, num * 100);
});

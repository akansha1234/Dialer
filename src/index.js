let btns = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
let del = document.querySelector(".delete");
let output = [];
btns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", () => {
    //console.log(output, "arr");
    output.push(btn.value);
    result.innerHTML = output.join("");
    //console.log(btn.value, "hii");
  });
});
del.addEventListener("click", () => {
  output.pop(-1);
  result.innerHTML = output.join("");
});

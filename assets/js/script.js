function incrementCounter() {
  let number = document.querySelector("div.output");
  let plus = document.querySelector("div.increment button");

  plus.addEventListener("click", () => {
    let num = Number(number.innerText);
    num = num + 1;
    number.innerText = num;
  });
}

function decrementCounter() {
  let number = document.querySelector("div.output");
  let minus = document.querySelector("div.decrement button");

  minus.addEventListener("click", () => {
    let num = Number(number.innerText);
    num = num - 1;
    number.innerText = num;
  });
}

incrementCounter();
decrementCounter();



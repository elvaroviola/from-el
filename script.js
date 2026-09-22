const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    const name = input.value;

    alert("Oh... so your name is " + name + "?");
});

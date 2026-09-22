const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const name = input.value.trim().toLowerCase();

    if (name === "davis") {
        window.location.href = "welcome.html";
    } else {
        window.location.href = "wrong.html";
    }
});

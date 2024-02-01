let button = document.getElementById("button")

button.onclick = function () {
    name = document.getElementById("name").value;
    window.localStorage.setItem("name" , `${name}`)
    window.location = `congrates.html`
}
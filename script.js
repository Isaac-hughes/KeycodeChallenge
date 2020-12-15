const heading = document.getElementById("heading");
const keyValue = document.getElementById("keyValue");
const keyCode = document.getElementById("keyCode");
const charCode = document.getElementById("charCode");

document.addEventListener("keypress", (x) => {
    keyValue.textContent = `${x.key}`
    keyCode.textContent = `${x.code}`
    charCode.textContent = `${x.charCode}`
    heading.textContent = `${x.charCode}`

})

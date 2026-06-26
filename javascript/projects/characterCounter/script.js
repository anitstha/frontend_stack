let textbox = document.getElementById("textbox");
let textcount = document.getElementById("text-count");

textbox.addEventListener("input", function () {
    const charLength = textbox.value.length;
    if (charLength <= 20) {
        textcount.textContent = charLength;
    } else {
        alert("Maximum length of 20 characters reached!!")
    }
})
function clear1() {
    document.form1.answer.value = ""; // Clear the calculator input field
    document.querySelector('.elem').style.display = 'block'; // Show the "elem" class
}

function doMath(wew) {
    var result = wew;
    document.form1.answer.value += result;
}

function equal() {
    form1.answer.value = eval(form1.answer.value);
}
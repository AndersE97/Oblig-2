// JavaScript source code
// controller
function selectBar(barNo) {
    if (chosenBar == barNo) {
        chosenBar = 'ingen'
        console.log('i if')
    } else {
        chosenBar = barNo
        console.log('i else')
    };
    show();
}
function deleteBar() {
    numbers.splice(chosenBar - 1, 1)
    barFeedBack = ""
    chosenBar = 'ingen'
    show();
}
function addBar() {
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        barFeedBack = "Skriv inn en verdi mellom 1 og 10. </br>";
    } else {
        numbers.push(inputValue);
        barFeedBack = "";
    };
    show();
}
function changeBar() {
    console.log('changeBar')
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        barFeedBack = "Skriv inn en verdi mellom 1 og 10. </br>";
        console.log('i if')
    } else {
        console.log('i else')
        numbers[chosenBar - 1] = inputValue;
        barFeedBack = "";
    };
    show();
}
// JavaScript source code
// view
show();
function show() {
    let defaultBtns = isNaN(chosenBar) == true ? 'disabled' : '';
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        let barNo = i + 1
        let borderOrNot = 'none';
        if (barNo == chosenBar) {
            borderOrNot = 'black'
        }
        svgInnerHtml += createBar(numbers[i], i + 1, borderOrNot);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="1000" viewBox="0 0 150 51">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${chosenBar}</i>
            <br />
            ${barFeedBack}
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <br />
            <button onclick="addBar()">Legg til stolpe</button>
            <button onclick="changeBar()" ${defaultBtns}>Endre valgt stolpe</button>
            <button onclick="deleteBar()" ${defaultBtns}>Fjerne valgt stolpe</button>
            `;
}
function createBar(number, barNo, borderOrNot,) {
    const width = 5;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 5;
    let y = 51 - height;
    let color = calcColor(1, 10, number);
    return `<rect stroke='${borderOrNot}' onclick="selectBar(${barNo})" width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}"></rect>`;
}
function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}
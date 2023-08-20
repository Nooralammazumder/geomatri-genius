function calculateTriangleArea() {
    // get base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // height value\
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);
    // area
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
    // rect width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate number
    if(isNaN(width) || isNaN(length)){
        console.log('wid is not a number');
        alert('please insert number');
        return ;
    }

    // calculate
    const area = width * length;
    // area
    const rectangleAreSpan = document.getElementById('rectangle-area');
    rectangleAreSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}

// reusable function --> reduce codes
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height');
    // validate
    if(isNaN(base)|| isNaN(height)){
        alert("Please enter valid values");
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    // add to calculation entry
    addToCalculationEntry('parallelogram', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', area);
}
// reusable input field
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p etc
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add the calculation entry
/*
1.get the element  where u want to add
2.create an element
3.if needed add class
4.set inner html
5.append child added
*/
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert
    </button>`

    calculationEntry.appendChild(p);
}


// data validation
// 1.set on number,email,text,and so on
// 2. check type using typeOf
// 3. nan check
const angleOne = document.querySelector("#first");
const angleTwo = document.querySelector("#second");
const angleThree = document.querySelector("#third");
const btnCheck = document.getElementById("check-button");
const outputBox = document.querySelector("#output-box");


const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const findButton = document.querySelector("#find-button");
const hypotenuseResult = document.querySelector("#output-box2");

const baseAreaInput = document.querySelector("#base-area");
const heightAreaInput = document.querySelector("#height-area");
const calculateButton = document.querySelector("#calculate-button");
const areaResult = document.querySelector("#output-box3");



btnCheck.addEventListener('click', ()=> {
    let x = Number(angleOne.value);
    let y = Number(angleTwo.value);
    let z = Number(angleThree.value);
    let sum = x + y + z;
    
    if(angleOne.value === "" || angleTwo.value === "" || angleThree.value === "")
    outputBox.innerText = "Please fill all the fields...";
    else if (sum === 180)
    outputBox.innerText = "Yes,These angles can form a triangle!!";
    else
    outputBox.innerText = "oops,These angles can't form a triangle!!";
    
});

findButton.addEventListener('click', ()=> {
    let baseValue = baseInput.value;
    let heightValue = heightInput.value;

    if(baseValue === "" || heightValue === "")
    hypotenuseResult.innerText = "Please Fill both the fields!!";
    else {
        let hypotenuse = Math.sqrt((baseValue * baseValue)  + (heightValue * heightValue));
        hypotenuseResult.innerText = "Hypotenuse: " + (hypotenuse).toFixed(2);
    }
});

calculateButton.addEventListener('click', ()=> {

    let baseAreaValue = baseAreaInput.value;
    let heightAreaValue = heightAreaInput.value;
    if(baseAreaValue === "" || heightAreaValue === "")
    areaResult.innerText = "Please fill both the fields!!";
    else {
        let area = (baseAreaValue * heightAreaValue) * 0.5;
        areaResult.innerText = "Area of the triangle is: " + area;
    }
});









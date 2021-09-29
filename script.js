const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const buttonCheck = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const findButton = document.querySelector("#find-button");
const hypotenuseResult = document.querySelector("#output-box2");

const baseAreaInput = document.querySelector("#base-area");
const heightAreaInput = document.querySelector("#height-area");
const calculateButton = document.querySelector("#calculate-button");
const areaResult = document.querySelector("#output-box3");

const formFive = document.querySelector('#five');
const quizScore = document.querySelector('.quiz-score');
const quizDiv = document.querySelectorAll('.quiz-wrapper');


function toCheck()
{
    let angleOneValue = Number(angleOne.value);
    let angleTwoValue = Number(angleTwo.value);
    let angleThreeValue = Number(angleThree.value);
    let sum = angleOneValue+angleTwoValue+angleThreeValue;
    
    if(angleOneValue === "" || angleTwoValue === "" || angleThreeValue === "")
    outputBox.innerText = "Please fill all the fields...";
    else if (sum === 180)
    outputBox.innerText = "Yes,These angles can form a triangle!!";
    else
    outputBox.innerText = "oops,These angles can't form a triangle!!";
    
}

function toFind()
{
    let baseValue = baseInput.value;
    let heightValue = heightInput.value;
    if(baseValue === "" || heightValue === "")
    hypotenuseResult.innerText = "Please Fill both the fields!!";
    else {
        let hypotenuse = Math.sqrt((baseValue * baseValue)  + (heightValue * heightValue));
        hypotenuseResult.innerText = "Hypotenuse: " + (hypotenuse).toFixed(2);
    }
}

function toGetArea()
{
    let baseAreaValue = baseAreaInput.value;
    let heightAreaValue = heightAreaInput.value;
    if(baseAreaValue === "" || heightAreaValue === "")
    areaResult.innerText = "Please fill both the fields!!";
    else {
        let area = (baseAreaValue * heightAreaValue) * 0.5;
        areaResult.innerText = "Area of the triangle is: " + area;
    }
}
let correctAns = ['3', 'Obtuse', '20units', 'True', '0', 'Acute', 'Isosceles', '75°', 'Equilateral', 'No'];

formFive.addEventListener('submit', function formQuiz(e) {

    e.preventDefault();

    let index = 0, score = 0;

    let formResult = new FormData(formFive);

    for(let [, value] of formResult) {
        if(value === correctAns[index]) {
            score += 1;
            quizDiv[index].style.border = '0.13rem solid rgb(36, 160, 36)';
        } else {
            quizDiv[index].style.border = '0.13rem solid red';
        }
        index += 1;
    }
    quizScore.innerText = `Score: ${score}/10`;
});


buttonCheck.addEventListener("click", toCheck);
findButton.addEventListener("click",toFind);
calculateButton.addEventListener("click", toGetArea);
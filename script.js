const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const buttonCheck = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");


function toCheck()
{
    let angleOneValue = angleOne.value;
    let angleTwoValue = angleTwo.value;
    let angleThreeValue = angleThree.value;

    if(angleOneValue === "" || angleTwoValue === "" || angleThreeValue === "")
    outputBox.innerText = "Please fill all the fields...";
    else if(angleOneValue + angleTwoValue + angleThreeValue === 180)
    outputBox.innerText = "Yes,These angles can form a triangle!!";
    else
    outputBox.innerText = "oops,These angles can't form a triangle!!"
}
buttonCheck.addEventListener("click", toCheck);

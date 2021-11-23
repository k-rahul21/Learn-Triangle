const formFive = document.querySelector('#five');
const quizScore = document.querySelector('.quiz-score');
const quizDiv = document.querySelectorAll('.quiz-wrapper');


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
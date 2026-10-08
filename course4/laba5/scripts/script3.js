let right_value;
let score = document.getElementById('score');
let right_answers = 0;
let wrong_answers = 0;
let score_count = 0;

function Multiplication_calculator2(){
    let first_num;
    let option_num;
    let second_num;
    let task = document.getElementById('task');
    let options = document.getElementsByClassName('option');
    let radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radio => radio.checked = false);
    first_num = Math.floor(Math.random() * 9) + 1;
    second_num = Math.floor(Math.random() *10) + 1;
    task.textContent = first_num + '*' + second_num + '=';
    right_value = first_num*second_num;
    score_count++;
    let generatedNumbers = []; 
    let range = 5; 
    for (let i = 0; i < 3; i++) {
        do {
            option_num = Math.floor(Math.random() * (2 * range)) + (right_value - range);
        } while (generatedNumbers.includes(option_num)|| option_num < 1||option_num===right_value); 
        
        generatedNumbers.push(option_num); 
    }
    let randomIndex = Math.floor(Math.random() * (generatedNumbers.length + 1));
    generatedNumbers.splice(randomIndex, 0, right_value);

    for (let i in options){
        options[i].textContent = generatedNumbers[i];
    }
}

function answerChange(value) {
    let answer = parseInt(document.querySelector(`label[for="${value}"]`).textContent);
    if(answer===right_value){
    check.textContent ="Молодець, відповідь правильна!";
    if (right_answers<score_count&&wrong_answers+right_answers<score_count){
        right_answers++;
    } 
    }
    else{
        check.textContent =`Помилка, правильна відповідь «${right_value}»`;
        if (wrong_answers<score_count&&wrong_answers+right_answers<score_count){
            wrong_answers++;
        } 
    }
    score.textContent =`Загальний рахунок ${(right_answers * 100 / score_count).toFixed(1)}% (${right_answers} правильних відповідей з ${score_count})`;
}
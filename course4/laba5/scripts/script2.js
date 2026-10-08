function Multiplication_calculator(action){
    let first_num;
    let second_num;
    let task = document.getElementById('task');

    switch (action){
        case 'next':
            if(document.getElementById('answer')){
            document.getElementById('answer').value = '';
            }
            first_num = Math.floor(Math.random() * 9) + 1;
            second_num = Math.floor(Math.random() *10) + 1;
            task.textContent = first_num + '*' + second_num + '=';
            right_value = first_num*second_num;
            score_count++;
            break;

        case 'check':
            let answerValue = document.getElementById('answer').value;
            let taskContent = task.textContent;
            if (answerValue !== '' && taskContent !== '') {
                    let answer = parseInt(document.getElementById('answer').value); 
                        let check = document.getElementById('check');
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
                        break;
                    }
                
    }
   
}
Multiplication_calculator('next');
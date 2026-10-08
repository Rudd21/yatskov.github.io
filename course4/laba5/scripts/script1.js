function Temperature_calculator(degrees) {
    let temp_c = document.getElementById('temperatute_in_celcius');
    let temp_f = document.getElementById('temperatute_in_fahrenheit');
    if (degrees ==='fahrenheit'){
        temp_c.value =  5/9 * (temp_f.value-32);
    }
    else if (degrees ==='celcius') {
        temp_f.value =  temp_c.value* (9/5) + 32;
    }
    else{
        alert("Одиниця вимірювання не визначена!")
    }
}


const field = document.querySelectorAll('.input-container input[name]');
for(let i of field){
    i.addEventListener('input', (e) => {
        let temp_c = document.getElementById('temperatute_in_celcius');
        let temp_f = document.getElementById('temperatute_in_fahrenheit');
        if (e.target.name ==='fahrenheit'){
            temp_c.value =  5/9 * (temp_f.value-32);
        }
        else if (e.target.name ==='celcius') {
            temp_f.value =  temp_c.value* (9/5) + 32;
        }
        else{
            alert("Одиниця вимірювання не визначена!")
        }
    })
}

function showLoader(show) {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = show ? 'block' : 'none';
    }
}

async function compareNumbers(num1, num2) {
    showLoader(true);
    
    // Перетворюємо вхідні дані на числа
    const n1 = Number(num1);
    const n2 = Number(num2);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            showLoader(false);
            if (isNaN(n1) || isNaN(n2)) {
                reject(new Error('Одне з значень не є числом!'));
            } else if (n1 > n2) {
                resolve('Перше число більше');
            } else if (n1 < n2) {
                resolve('Друге число більше');
            } else {
                reject('Числа рівні');
            }
        }, 1000);
    });
}

compareNumbers('4', 4)
    .then(num => {
        document.getElementById('result').innerText = num;
    })
    .catch(error => {
        // Якщо помилка — це об'єкт Error, беремо message, якщо рядок — саме значення
        document.getElementById('result').innerText = error.message || error;
    });
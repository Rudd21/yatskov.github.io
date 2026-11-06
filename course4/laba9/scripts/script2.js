function showLoader(show) {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = show ? 'block' : 'none';
    }
}

async function checkNumber(num) {
    showLoader(true); // Показуємо лоадер перед початком
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Додамо невелику затримку, щоб побачити лоадер
            const parsedNum = parseFloat(num);
            if (isNaN(parsedNum)) {
                reject(new Error('Введене значення не є числом! 👁️👄👁️'));
            } else if (parsedNum > 10) {
                resolve('Число більше 10');
            } else {
                resolve('Число менше або дорівнює 10');
            }
        }, 1000);
    });
}

// Виклик з обробкою результату
checkNumber('t')
    .then(result => {
        document.getElementById('result').innerText = result;
    })
    .catch(error => {
        document.getElementById('result').innerText = error.message;
    })
    .finally(() => {
        showLoader(false); // Ховаємо лоадер в будь-якому випадку
    });
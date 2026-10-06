console.log("\nCollection of cars: ")

// Окремий об'єкт автомобіля
console.log("Окремий об'єкт автомобіля:");

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    engineType: "Hybrid",
    isUsed: true,
    carInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Рік випуску: ${this.year}, Двигун: ${this.engineType}, В експлуатації: ${this.isUsed ? "Так" : "Ні"}`);
    }
};

car.carInfo();


// Масив об'єктів (гараж / автопарк) та вивід
console.log("Масив об'єктів (гараж / автопарк) та вивід:");

let garage = [
    { make: "Toyota", model: "Camry", year: 2020, engineType: "Hybrid", isUsed: true },
    { make: "BMW", model: "M3", year: 2022, engineType: "Petrol", isUsed: false },
    { make: "Tesla", model: "Model 3", year: 2021, engineType: "Electric", isUsed: true },
    { make: "Audi", model: "A6", year: 2018, engineType: "Diesel", isUsed: true },
    { make: "Ford", model: "Mustang", year: 1969, engineType: "Petrol", isUsed: false }
];

function displayGarage() {
    garage.forEach(car => {
        console.log(`Марка: ${car.make}, Модель: ${car.model}, Рік випуску: ${car.year}, Двигун: ${car.engineType}, В експлуатації: ${car.isUsed ? "Так" : "Ні"}`);
    });
}

garage.push({ make: "Porsche", model: "Taycan", year: 2023, engineType: "Electric", isUsed: false });
displayGarage();


// Методи масивів (sort, filter, find)
console.log("Методи масивів (sort, filter, find):");

garage.sort((a, b) => a.year - b.year); // Сортування за роком випуску
console.log("Автомобілі, відсортовані за роком випуску: ", garage);

let electricCars = garage.filter(car => car.engineType === "Electric"); // Фільтрація тільки електричних авто
console.log("Електромобілі: ", electricCars);

let bmwCar = garage.find(car => car.make === "BMW"); // Пошук авто конкретної марки
console.log("Знайдене авто BMW: ", bmwCar);


// Інтерактивне додавання нового авто
console.log("Інтерактивне додавання нового авто:");

function addCarToGarage() {
    let make = prompt("Введіть марку автомобіля:");
    let model = prompt("Введіть модель автомобіля:");
    let year = Number(prompt("Введіть рік випуску автомобіля:"));
    let engineType = prompt("Введіть тип двигуна (Petrol, Diesel, Electric, Hybrid):");
    let isUsedInput = prompt("Чи використовується авто? (якщо так, введіть будь-що, якщо ні — залиште порожнім)");
    
    let isUsed = Boolean(isUsedInput);

    garage.push({ make, model, year, engineType, isUsed });
    displayGarage();
}

addCarToGarage();


// Допоміжні функції
console.log("Допоміжні функції:");

function toggleUsageStatus(car) { // Зміна статусу використання авто
    if (!car.isUsed) {
        car.isUsed = true;
        console.log(`Статус змінено. Авто ${car.make} ${car.model} тепер використовується.`);
    } else {
        alert("Авто вже використовується!");
    }
}

toggleUsageStatus(car);

function calculateAverageCarYear(carList) { // Обчислення середнього року випуску авто
    let suma = 0;
    for (let i = 0; i < carList.length; i++) {
        suma += Number(carList[i].year);
    }
    let averageYear = suma / carList.length;
    console.log(`Середній рік випуску всіх авто в гаражі: ${averageYear.toFixed(0)}`);
}

calculateAverageCarYear(garage);
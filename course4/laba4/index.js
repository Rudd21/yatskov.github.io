// TASK 1
console.log("Task 1:");

let book  = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo(){
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так": "Ні"} `)
    }
}

// book.isRead = !book.isRead;
book.bookInfo();

// TASK 2
console.log("Task 2:");

let library = [
    {title: "Harry Potter and the Sorcerer's Stone",  author: "J.K. Rowling", year: 1997, isRead: true },
    {title: "The Hobbit",  author: "J.R.R. Tolkien", year: 1937, isRead: false },
    {title: "1984",  author: "George Orwell", year: 1949, isRead: true },
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true},
    {title: "Moby Dick", author: "Herman Melville", year: 1851, isRead: false}
]

function displayLibrary(){
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так": "Ні"} `)
    });
}

// displayLibrary();
library.push({title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isRead: true});
displayLibrary();

// TASK 3
console.log("Task 3:");
library.sort((a,b) => a.year - b.year);
console.log("Книги, відсортовані за роком видання: ", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги: ", unreadBooks);

let tolkienBooks = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книги Толкіна: ", tolkienBooks);


// TASK 4
console.log("Task 4:");

function AddBookToTheLibrary(){
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = prompt("Введіть рік видання книги:");
    let isRead = prompt("Чи прочитана книга?(якщо так, введіть у строку будь-який текст, якщо ні, залиште строку порожньою)");

    library.push({title, author, year, isRead })

    displayLibrary()
}

AddBookToTheLibrary();


// Individual task
console.log("Individual task:")

function markAsRead(book) {
    if (book.isRead === false) {
        book.isRead = true;
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"} `);
    } else {
        alert("Книга вже прочитана!");
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"} `);
    }
}

markAsRead(book);

function calculateAverageYear(library) {
    let averageYear, suma = 0;
    for (let book = 0; book<library.length; book++) {
        suma+= library[book].year;
    };
    averageYear = suma/library.length;
    console.log(`Середній рік видання всіх книг у library: ${averageYear.toFixed(0)}`);
}

calculateAverageYear(library);

// library.js

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned.`);
    }
}

const books = [
    new Book("A Tale of Two Cities", "Dickens", "111"),
    new Book("Atomic Habits", "James Clear", "222"),
    new Book("Harry Potter", "J.K. Rowling", "333")
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

// Issue by ISBN
function issueByISBN(isbn) {
    const found = books.find(b => b.isbn === isbn);
    found ? found.issueBook() : console.log("Book not found.");
}

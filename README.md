# Books

This is Books Management where we can add new book, get all books, get books specofic Id, update book detals and delete book.

## Installation

- Clone this repository.
- Run `npm install` to install the dependencies.
- Run `npm start` to start the server. 

## EndPoints

To use this project, follow these steps:
**Endpoint: `https://books-eysv.onrender.com/books/addNewBook` (POST)**

Add a new book to the library.

**Request Example:**

```http
POST /books/addNewBook HTTP/1.1
Host: books-eysv.onrender.com
Content-Type: application/json

{
    "title": "Add New Book 9",
    "author": "Aditya Narayan",
    "summary": "This is a new book for testing"
}
.

# Books

This is Books Management where we can add new book, get all books, get books specofic Id, update book detals and delete book.

## Installation

- Clone this repository.
- Run `npm install` to install the dependencies.
- Run `npm start` to start the server.

- ## Hosting
- For Hosting I have Used Render cloud hosting for developers.
- It Provides Linux Based Hosting Platform.
- https://dashboard.render.com/

## EndPoints

**Endpoint: `https://books-eysv.onrender.com/books/addNewBook` (POST)**

Add a new book to the library.

**Request Example:**

```http
POST /books/addNewBook
Host: books-eysv.onrender.com
Content-Type: application/json

{
    "title": "Add New Book 9",
    "author": "Aditya Narayan",
    "summary": "This is a new book for testing"
}

**Endpoint: `https://books-eysv.onrender.com/books/getAllBooks` (GET)**

-Retrieve a list of all available books in the library.

**Request Example:**

```http
GET /books/getAllBooks
Host: books-eysv.onrender.com


**Endpoint: `https://books-eysv.onrender.com/books/getBookById/:id` (GET)**

-Retrieve a specific book from the library by providing its `id` as a parameter.

**Request Example:**

```http
GET /books/getBookById/65406e0c3e5176ff4f7d3c1d
Host: books-eysv.onrender.com


**Endpoint: `https://books-eysv.onrender.com/books/updateBookDetails/{id}` (PUT)**

-Update book details by providing the `bookId` in the URL.

**Request Example:**

```http
PUT /books/updateBookDetails/65406e0c3e5176ff4f7d3c1d
Host: https://books-eysv.onrender.com
Content-Type: application/json
{
    "title": "update Book ",
    "author": "James Rowling",
    "summary": "This is a new book for testing"
}

**Endpoint: `https://books-eysv.onrender.com/books/deleteBookById/{bookId}` (DELETE)**

-Delete a book by providing the `bookId` in the URL.

**Request Example:**

```http
DELETE /books/deleteBookById/65406e0c3e5176ff4f7d3c1d
Host: https://books-eysv.onrender.com


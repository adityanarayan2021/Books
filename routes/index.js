import { Router } from "express";
const bookRoute = Router();
import Books from "../model/books.js";
import validate from "../middleWare/bookValidation.js";

bookRoute.post('/addNewBook', validate, async (req, res, next) => {
try {
  const { title, author, summary } = req.body;
    const newBook = new Books({
      title,
      author,
      summary,
    });
    await newBook.save();
  res.status(201).json({code: 201, msg: "New Book Added successfilly"});
} catch (error) {
  next(error);
  res.status(500).json({ error: 'Could not add new book.' });
}
});

bookRoute.get('/getAllBooks', async (req, res, next) => {
  try {
    const books = await Books.find({}).sort({ createdAt: -1 });
    res.status(200).json({books});
  } catch (error) {
      res.status(500).json({ error: 'Could not retrieve books.' });
      next(error);
  }
});

bookRoute.get('/getbookById/:id', async (req, res, next) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
      res.status(500).json({ error: 'Could not retrieve the book.' });
      next(error);
  }
});

bookRoute.put('/updateBookDetails/:id', validate, async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);

    if (!book) {
      return res.status(404).json({code: 404, msg: 'Book not found' });
    }
    if (req.body.title) {
      book.title = req.body.title;
    }
    if (req.body.author) {
      book.author = req.body.author;
    }
    if (req.body.summary) {
      book.summary = req.body.summary;
    }

    await book.save();
    res.status(200).json({code:200, msg: 'Book updated successfully'});
  } catch (error) {
    res.status(500).json({ error: 'Could not update the book.' });
  }
});


bookRoute.delete('/deleteBook/:id', async (req, res, next) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(404).json({code: 404, msg: 'Book not found' });
    }

    await book.deleteOne();
    res.status(204).json({code: 204, msg: "Book Removed successfully"});
  } catch (error) {
      res.status(500).json({ error: 'Could not delete the book.' });
      next(error);
  }
});

export default bookRoute;
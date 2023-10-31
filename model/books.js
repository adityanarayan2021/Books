import { Schema, model } from 'mongoose';

const booksSchema = new Schema({
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    summary: {
      type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
  });
  
  const Books = model('Book', booksSchema);
  export default Books;
import express, { json } from 'express';
const app = express();
import cors from 'cors';
import bookRoute from './routes/index.js';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
app.use(cors({
  origin: '*'
}));

app.use(json());

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/messages", (req, res) => {
  res.send("Hello from server");
});

app.use('/books', bookRoute);

app.get("/:universalURL", (req, res) => {
  res.status(404).send("Given URL NOT FOUND");
});

// MongoDb Connectivity URL
const dbURL = process.env.mongoDBUrl;

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
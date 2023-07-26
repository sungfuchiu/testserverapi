const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages:  { type: Number, required: true },
  fiction:  { type: Boolean, required: true },
});

const Book = mongoose.model("Book", todoSchema);
module.exports = Book;
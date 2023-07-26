
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);
// const uri = "mongodb+srv://testuser:testpw1@nodeexpress-jwt-test.p1g9w.mongodb.net/bookList?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const bookRouter = require('./routes/books');

// adding /books to before all routes
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

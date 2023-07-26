const router = require("express").Router();
let Book = require("../models/booklist.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const pages = req.body.pages;
  const fiction = req.body.fiction;
  // create a new Book object 
  const newBook = new Book({
    title,
    author,
    pages,
    fiction
  });

  console.log("checkpoint");

  // save the new object (newBook)
  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((books) => {
      books.title = req.body.title;
      books.author = req.body.author;

      books
        .save()
        .then(() => res.json("Book updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

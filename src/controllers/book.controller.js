const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.post("", crudController(Book).post);

router.get("", crudController(Book).getAll);
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.find({ id: req.params.id }).lean().exec();

    if (book) {
      return res.send(book);
    } else {
      return res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.patch("/:id", async (req, res) => {
//   try {
//     const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();

//     res.status(201).send(book);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.params.id).lean().exec();

//     res.send(book);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

module.exports = router;

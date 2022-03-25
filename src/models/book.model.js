const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [{ type: String, required: false }],
    author: { type: String, required: true },
    price: { type: Number, required: true },
    section: { type: String, required: true },
    isbnNumber: { type: Number, required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);

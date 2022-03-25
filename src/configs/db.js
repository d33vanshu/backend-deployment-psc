const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://teamMyntra:2Qak72qo8wS3tI9D@cluster0.hphku.mongodb.net/myntraDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;

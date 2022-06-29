//  Add your code here

const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true},

    occupation: {
      type: String,
    default: 3},

    catchPhrase: {
      type: String,
      defatult:3}
  },
  
);

const Celebrity = model("Celebrity", postSchema,"celebrities");

module.exports = Celebrity;
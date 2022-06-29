const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true},

    genre: {
      type: String,
    },

    plot: {
      type: String,
      },

    cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }]


  },
  
);

const Movie = model("Movie", postSchema);

module.exports = Movie;
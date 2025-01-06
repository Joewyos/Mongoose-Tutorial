import mongoose from "mongoose";
import { validate } from "uuid";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model
const movieModel = mongoose.model("Movie", movieSchema);

const updateById = async () => {
  try {
    const result = await movieModel.deleteMany({ ratings: 4 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateById };

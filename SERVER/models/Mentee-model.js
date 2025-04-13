const { Schema, model } = require('mongoose');

const menteeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    job_description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },
    price_per_hour: {
      type: Number,
      required: [true, "Price per hour is required"],
      min: [0, "Price must be positive"],
    },
    image: {
      type: String,
      default: "", // Optional: add a default avatar URL
    },
  },
  {
    collection: 'Mentees',
    timestamps: true,
  }
);

const Mentee = model('Mentee', menteeSchema);

module.exports = Mentee;

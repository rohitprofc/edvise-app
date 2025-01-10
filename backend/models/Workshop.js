const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  date: Date,
});

module.exports = mongoose.model('Workshop', WorkshopSchema);

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const workshopRoutes = require('./routes/workshops');
app.use('/api/workshops', workshopRoutes);

console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API is running fastly!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

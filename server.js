const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

// Add a simple route for the root
app.get('/', (req, res) => {
  res.send('E-commerce Back End is running!');
});

// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
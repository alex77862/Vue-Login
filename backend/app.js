const express = require('express');
const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// Requetes
app.use('/api/user', (req, res, next) => {
    const user = [
      {
        user: 'Alex',
        password: '1234'
      }
    ];
    res.status(200).json(user);
  });

module.exports = app;
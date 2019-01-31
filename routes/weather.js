const express = require('express');
const keys = require('../config/keys');
const request = require('request');
const router = express.Router();
const apiKey = keys.api;
let city = keys.city;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=${apiKey}`;

router.get('/', (req, res) => {
  request(url, function(err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      res.send(body);
    }
  });
});

module.exports = router;

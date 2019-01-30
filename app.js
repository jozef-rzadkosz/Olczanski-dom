const express = require('express');
const request = require('request');
const app = express();
const keys = require('./config/keys');
const contact = require('./routes/contact');

const apiKey = keys.api;
let city = keys.city;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=${apiKey}`;

app.use(express.json());
app.use('/contact', contact);

app.get('/weather', (req, res) => {
  request(url, function(err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      res.send(body);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello world, server works! :)');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));

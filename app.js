const express = require('express');
const request = require('request');
const app = express();

const contact = require('./routes/contact');
const weather = require('./routes/weather');

app.use(express.json());
app.use('/contact', contact);
app.use('/weather', weather);

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

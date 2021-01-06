const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

// Allows connection to the CSS file
app.use(express.static('public'));
// Accesses bodyParser parser and allows us to access the name of the city the user typed
app.use(bodyParser.urlencoded({ extended: true }));
// Sets the template engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const weather = {description: "desc", temperature: 23.3, windSpeed: 3.5, pressure: 2.5, humidity: 5.3, locationName: "italy"}
  res.render('index', weather);
})

app.listen(3000, () => {
  console.log('Weather app listening on port 3000!')
})
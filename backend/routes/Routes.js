const express = require('express');
const axios = require('axios');
const app = express.Router();
const repository = require('../respositories/FavoritesRepository');
const { json } = require('express');

// get all todo items in the db
app.get('/weather/:zipcode', async(req, res) => {
  let { zipcode } = req.params;
  if (zipcode == undefined) {
    zipcode = 90001;
  }
  try {
    const ret = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=655dfc390726be35679ee1f171b45301`);
    const weather = ret.data;
    const data = {
      zipcode,
      mainDesc: weather.weather[0].main,
      temperature: weather.main.temp,
      windSpeed: weather.wind.speed,
      pressure: weather.main.pressure,
      humidity: weather.main.humidity,
      locationName: weather.name
    };
    res.json(data);
  } catch (e) {
    res.status(500).json({result: "error", error: e.message});
  }
});

// get all favorites
app.get('/favorites', async(req, res) => {
  const favorites = repository.findAll();
  res.json(favorites);
});

// add a favorite item
app.post('/favorites', (req, res) => {
  const { favorite } = req.body;
  const favorites = repository.addFavorite(favorite);
  res.json(favorites);
});

// delete a favorite item
app.delete('/favorites/:zipcode', (req, res) => {
  const { zipcode } = req.params;
  const favorites = repository.deleteFavorite(zipcode);
  res.json(favorites);
});
module.exports = app;

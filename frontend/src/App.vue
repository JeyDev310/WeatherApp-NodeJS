<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"></li>
        <li class="nav-item"></li>
        <li class="nav-item"></li>
      </ul>
      <div class="form-inline my-2 my-lg-0" _lpchecked="1">
        <input class="form-control mr-sm-2" type="text" placeholder="Zip Code" aria-label="Zip Code" v-model="zipcode">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="fetchWeather(zipcode)">Search</button>
      </div>
    </div>
  </nav>
  <div class="footer">
      <ul class="list-group" style="">
        <a class="list-group-item list-group-item-action" v-for="favorite in favorites" v-bind:key="favorite">
            {{favorite.locationName}} ({{favorite.zipcode}})
            <button type="button" class="btn btn-default" style="display: inline; float: right;" @click="deleteFavorite(favorite)">X</button>
        </a>
      </ul>
      <div>
        <div class="card" style="margin-top: 30px;">
            <div class="card" style="margin-top: 0px;">
              <div class="card-body" style="margin-top: 0px;">
                  <h4 class="card-title">
                    <b>{{weather.locationName ? weather.locationName : '_ _ _'}}</b>
                  </h4>
                  <div class="row" style="">
                    <div class="col-sm-4">
                        <h1>{{weather.temperature ? weather.temperature : 0}}°</h1>
                        <h6 style="">{{weather.mainDesc ? weather.mainDesc : ''}}</h6>
                    </div>
                    <div class="col-sm-4 col-5">
                      
                    </div>
                    <div class="col-sm-4">
                        <h5 style="">Precipitation 0%</h5>
                        <h5 style="">Humidity {{weather.humidity ? weather.humidity : 0}}%</h5>
                        <h5 style="">Wind {{weather.windSpeed ? weather.windSpeed : 0}}mph</h5>
                        <div class="row" style="">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4 col-5"></div>
                          <div class="col-sm-4"></div>
                        </div>
                    </div>
                  </div>
                  <a class="btn btn-primary text-white" @click="addFavorite" >Add to favorites</a>
              </div>
            </div>
        </div> © Firstly NodeJS 2021
      </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  components: {  },
  data() {
    return {
      zipcode: '',
      weather: {},
      favorites: []
    };
  },
  methods: {
    fetchWeather(zipcode='90001') {
      this.$http.get(`/weather/${zipcode}`).then(response => {
        this.weather = response.data;
      });
    },
    addFavorite() {
      this.$http.post(`/favorites`, {favorite: this.weather}).then(response => {
        this.favorites = response.data;
      });
    },
    deleteFavorite(favorite) {
      this.$http.delete(`/favorites/${favorite.zipcode}`).then(response => {
        this.favorites = response.data;
      });
    }
  },
  created: function() {
    this.fetchWeather();
  },  
};
</script>

<style lang="scss">
</style>

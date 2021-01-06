class FavoritesRepository {
  constructor() {
    this.favorites = [];
  }
  findAll() {
    return this.favorites;
  }
  findByZip(zipcode) {
    const favorites = this.favorites.filter(item => item.zipcode == zipcode);
    return favorites;
  }
  addFavorite(favorite) {
    const favorites = this.findByZip(favorite.zipcode)
    if (favorites && favorites.length > 0) {
      return this.favorites;
    }
    this.favorites.push(favorite);
    return this.favorites;
  }
  deleteFavorite(zipcode) {
    this.favorites = this.favorites.filter(item => item.zipcode != zipcode);
    return this.favorites;
  }
}

module.exports = new FavoritesRepository();

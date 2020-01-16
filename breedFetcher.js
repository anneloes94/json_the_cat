// RETURNS DESCRIPTION
const request = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breedName, callback) => {
  request(`${URL}${breedName}`, (error, response, body) => {
    if (body.length < 3 || error) {
      // console.log(error)
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const description = data[0].description.trim();
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
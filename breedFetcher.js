const request = require('request')
const URL = "https://api.thecatapi.com/v1/breeds/search?q="
const breedname = process.argv.slice(2)

request(`${URL}${breedname}`, (error, response, body) => {
  if (body = []) {
    return console.log("Noooo!")
  } else {
    const data = JSON.parse(body)
    console.log(typeof body);
    console.log(data[0].description)
  }
});




// print out body conten

// make into JS object
// JSON.parse

// access first entry in data array
//and print out description
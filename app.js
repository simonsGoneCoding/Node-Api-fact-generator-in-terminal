//connected with numbersapi.com
// http://numbersapi.com/random/year?json

const fetch = require("node-fetch");
//npm package enabling coloring terminal messeges
const colors = require("colors");
colors.enable();

//get year from terminal
const year = process.argv[2] || Math.floor(Math.random() * 2022);

//fetch from numbers.api
fetch(`http://numbersapi.com/${year}/year?json`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((jsonRes) => console.log(jsonRes.text.italic.yellow))
  .catch((err) => console.log("Errrrrrorrr!!!".red, err));

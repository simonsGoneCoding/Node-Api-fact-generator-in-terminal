// http://numbersapi.com/${number}/${type}?json

const fetch = require("node-fetch");
//npm package enabling coloring terminal messeges
const colors = require("colors");
colors.enable();

const helper = require("./helperFunction");

helper.determineType();

const number = helper.number;
const type = helper.type;

//fetch from numbers.api

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((jsonRes) => console.log(jsonRes.text.italic.yellow))
  .catch((err) => console.log("Errrrrrorrr!!!".red, err));

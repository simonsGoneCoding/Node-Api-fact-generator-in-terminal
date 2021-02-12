//connected with numbersapi.com
// http://numbersapi.com/random/year?json

const fetch = require("node-fetch");

//get year from terminal
const year = process.argv[2];

//fetch from numbers.api
fetch(`http://numbersapi.com/2000/year?json`).then(
  (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Request failed!");
  },
  (networkError) => console.log(networkError.message)
);

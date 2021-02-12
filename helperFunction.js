const helper = {
  number: "",
  type: "",

  determineType() {
    const arg = process.argv[2];
    let number;
    let type;

    if (arg.indexOf("=") === -1) {
      console.log("None year or number given!");
    } else {
      if (arg.indexOf("--year") === 0) {
        console.log("Looking for year...".yellow);
        type = "year";
        console.log(`Your type is ${type}`);
        number = arg.slice(7);
        console.log(`Your chosen year is ${number}`);
      } else if (arg.indexOf("--math") === 0) {
        console.log("Looking for number...".yellow);
        type = "math";
        console.log(`Your type is ${type}`);
        number = arg.slice(7);
        console.log(`Your chosen number is ${number}`);
      }
    }
    this.number = number;
    this.type = type;
  },
};

module.exports = helper;

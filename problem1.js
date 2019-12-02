const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./problem1-input.txt"),
  console: false
});

let fuelSum = 0;

readInterface.on("line", function(line) {
    fuelSum = fuelSum + fuelRequirementsSum(line, 0);
});

readInterface.on("close", function(line) {
  console.log(fuelSum);
});

const fuelRequirementsSum = (moduleMass, localFuelSum) => {
  const calcaultedMass = parseInt(moduleMass / 3) - 2;
  console.log("calcaultedMass",calcaultedMass);
  console.log("localFuelSum",localFuelSum);
  if (calcaultedMass > 0) {
    localFuelSum = localFuelSum + calcaultedMass;
    return fuelRequirementsSum(calcaultedMass, localFuelSum);
  } else {
    return localFuelSum;
  }
};

const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./problem2-input.txt"),
  console: false
});

readInterface.on("line", function(line) {
  const alarmArray = intialAlarm(line.split(",").map(Number));
  IntcodeComputation(alarmArray);
});


const intialAlarm = array => {
  array[1] = 'n';
  array[2] = 'v';
  return array;
};

const IntcodeComputation = array => {
    for( i = 0; i<array.length; i = i+4){
        switch(array[i]){
            case 1:
                array[array[i+3]] = '(' +String(array[array[i+1]]) + '+' + String(array[array[i+2]])+ ')' 
                break;
            case 2:
                array[array[i+3]] = '(' + String(array[array[i+1]]) + '*' + String(array[array[i+2]]) + ')' 
                break;
            case 99:
                break;
            default:
                break;
        }

    }
    for( n = 0; n<array.length; n++){
        for( v = 0; v<array.length; v++){
            if(eval(array[0]) == 19690720)console.log(n,v,100*n+v)
        }}
    

};



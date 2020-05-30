let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 19;

if(registeredEarly && age >18){
  raceNumber +=1000;
}

if (registeredEarly && age >18) {
  console.log('´Your race will start at 9:30 am, your race number is: ${raceNumber}´');
}

else if (!registeredEarly && age >18) {
  console.log("Your race will start at 9:30 am, your race number is: ${raceNumber}");
}

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK!");
  } else {
    const point = Math.floor((speed - speedLimit) / kmPerPoint);

    if (point >= 12) {
      console.log("License Suspended!");
    } else {
      console.log(`Points: ${point}`);
    }
  }
}

checkSpeed(60);
checkSpeed(70);
checkSpeed(72);
checkSpeed(75);
checkSpeed(97);
checkSpeed(190);

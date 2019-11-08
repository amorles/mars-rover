// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
}
// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction == "N"){
    rover.direction = "W"
  }
  else if(rover.direction == "W"){
    rover.direction = "S"
  }
  else if(rover.direction == "S"){
    rover.direction = "E"
  }
  else if(rover.direction == "E"){
    rover.direction = "N"
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction == "N"){
    rover.direction = "E"
  }
  else if(rover.direction == "E"){
    rover.direction = "S"
  }
  else if(rover.direction == "S"){
    rover.direction = "W"
  }
  else if(rover.direction == "W"){
    rover.direction = "N"
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction == "N"){
    rover.y++
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  else if(rover.direction == "S"){
    rover.y--
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  if(rover.direction == "W"){
    rover.x--
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  else if(rover.direction == "E"){
    rover.x++
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  if(rover.direction == "N"){
    rover.y--
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  else if(rover.direction == "S"){
    rover.y++
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  if(rover.direction == "W"){
    rover.x++
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
  else if(rover.direction == "E"){
    rover.x--
    console.log("The rover is now at: (" + rover.x + "," + rover.y + ")")
  }
}

function commands(string){
  for(i=0, i < string.length, i++ ){

  }
}

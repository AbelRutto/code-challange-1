//speed detector of a car

function SpeedDetector (speed){
    if (speed <=70 ) {
      console.log("Ok");
    }else { console.log("points:"+((speed-70)/5));{

        if((speed-70)/5>12) {console.log("License Suspended")}
    }
}

}
SpeedDetector(50)
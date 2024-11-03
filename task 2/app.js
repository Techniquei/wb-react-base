var car = {
    engine: {
        rpm: 0,
    },
    transmission: {
        currentGear: 1,
        gears: [{ gearRatio: 4 }, { gearRatio: 2 }, { gearRatio: 1.5 }, { gearRatio: 1 }],
    },
    wheelsDiameter: 0.33,
    currentSpeed: 0,
    gearboxRatio: 3.9,
};
function changeEngineRpm(rpm) {
    car.engine.rpm = rpm;
    console.log("changed engine rpm: ".concat(rpm));
    updateCarSpeed();
}
function changeTransmissionGear(gear) {
    car.transmission.currentGear = gear;
    console.log("changed transmission gear: ".concat(gear));
    updateCarSpeed();
}
function updateCarSpeed() {
    var rps = car.engine.rpm / 60;
    var wheelsRps = rps / car.transmission.gears[car.transmission.currentGear - 1].gearRatio / car.gearboxRatio;
    car.currentSpeed = wheelsRps * car.wheelsDiameter * Math.PI;
    console.log("current car speed: ".concat(car.currentSpeed, " m/s"));
}
console.log('car: ', JSON.stringify(car));
changeEngineRpm(1000);
changeEngineRpm(2000);
changeTransmissionGear(2);
changeEngineRpm(5000);
changeTransmissionGear(4);

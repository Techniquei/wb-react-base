interface Car {
    engine: Engine;
    transmission: Transmission;
    wheelsDiameter: number;
    currentSpeed: number;
    gearboxRatio: number;
    doors?: number;
}

interface Engine {
    rpm: number;
}

type GearNumber = 1 | 2 | 3 | 4;

interface Transmission {
    currentGear: GearNumber;
    gears: Gear[];
}

interface Gear {
    gearRatio: number;
}

const car: Car = {
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
}

function changeEngineRpm(rpm: number) {
    car.engine.rpm = rpm;
    console.log(`changed engine rpm: ${rpm}`);
    updateCarSpeed();
}

function changeTransmissionGear(gear: GearNumber) {
    car.transmission.currentGear = gear;
    console.log(`changed transmission gear: ${gear}`);
    updateCarSpeed();
}

function updateCarSpeed() {
    const rps = car.engine.rpm / 60;
    const wheelsRps = rps / car.transmission.gears[car.transmission.currentGear - 1].gearRatio / car.gearboxRatio;
    car.currentSpeed = wheelsRps * car.wheelsDiameter * Math.PI;
    console.log(`current car speed: ${car.currentSpeed} m/s`);
}

console.log('car: ', JSON.stringify(car));
changeEngineRpm(1000);
changeEngineRpm(2000);
changeTransmissionGear(2);
changeEngineRpm(5000);
changeTransmissionGear(4);

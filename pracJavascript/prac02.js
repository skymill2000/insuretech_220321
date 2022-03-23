let car = {
  carname: "bmw",
  ph: 140,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

// console.log(car.carname);
// console.log(car.start);
// car.start();

// const carname = car.carname;
// const carph = car.ph;

const { carname, ph } = car;
console.log(carname);
console.log(ph);

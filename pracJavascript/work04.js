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

let car1 = {
  carname: "sonata",
  ph: 250,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let car2 = {
  carname: "poter",
  ph: 180,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

const cars = [car, car1, car2];

// Todo: work04
//****배열 내부에 Bmw 라는 이름의 차량이 있으면 "해당차량의 마력은 ?? 입니다". for of / if****
// if(name == ""){
//     //상기 조건을 만족시킬때 구문 실행
// }

for (car of cars) {
  if (car.carname === "bmw") {
    // console.log("해당차량의 마력은 " + car.ph + " 입니다");
    console.log(`${car.carname}의 마력은${car.ph} 마력 입니다`);
  }
}

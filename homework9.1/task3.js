const car1 = {
  brand: "Ford",
  model: "Focus",
  year: 2015,
};

const car2 = {
  brand: "BMW",
  model: "540i",
  owner: "Serhii",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);

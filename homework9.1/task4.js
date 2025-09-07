let person = {
  firstName: "Serthii",
  lastName: "Kosolapov",
  age: 28
};

person.email = "s.kos@gmail.com";

delete person.age;

console.log(person);
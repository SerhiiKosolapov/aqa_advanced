const users = [
  { name: "Dmitro", email: "d.mytro@example.com", age: 25 },
  { name: "Nastya", email: "n.astya@example.com", age: 30 },
  { name: "Anton", email: "ser.hii@example.com", age: 28 }
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Вік: ${age}`);
  console.log("———————");
}
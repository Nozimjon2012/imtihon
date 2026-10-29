import { users } from "./data.js";

function addUser(arr, name, lastName, age, job, email, password) {
  let newUser = {
    id: users.length === 0 ? 1 : users.at(-1).id + 1,
    name,
    lastName,
    age,
    job,
    email,
    password,
  };

  arr.push(newUser);

  return newUser;
}

console.log(
  addUser(users, "John", "Macgregor", 34, "Boxer", "johndoe@gmail.com", "1234"),
);

console.log(users);

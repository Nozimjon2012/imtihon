// import { users } from "./data.js";

// function addUser(arr, name, lastName, age, job, email, password) {
//   let newUser = {
//     id: users.length === 0 ? 1 : users.at(-1).id + 1,
//     name,
//     lastName,
//     age,
//     job,
//     email,
//     password,
//   };

//   arr.push(newUser);

//   return newUser;
// }

// console.log(
//   addUser(users, "John", "Macgregor", 34, "Boxer", "johndoe@gmail.com", "1234"),
// );

// console.log(users);

import { users } from "./data.js";

function deleteUser(arr, id) {
  let index = arr.findIndex((user) => user.id === id);

  if (index !== -1) {
    arr.splice(index, 1);
    return "User deleted successfully";
  } else {
    return "User not found";
  }
}

console.log(deleteUser(users, 2));
console.log(users);


// function readUser(arr, id) {
//   let user = arr.find((user) => user.id === id);

//   if (user) {
//     return user;
//   } else {
//     return "User not found";
//   }
// }

// console.log(readUser(users, 1));
// console.log(readUser(users, 2));
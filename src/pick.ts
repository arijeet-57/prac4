import console = require("node:console");

interface User {
    name: string,
    age: number
}

function ageSum(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = ageSum({
    name: "Blake",
    age: 45
}, {
    name: "Yedda",
    age: 60
});

console.log(age);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console = require("node:console");
function ageSum(user1, user2) {
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
//# sourceMappingURL=pick.js.map
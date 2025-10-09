"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
async function getAllTodosWithUserDetails() {
    const client = await (0, utils_1.getClient)();
    const joinQuery = `
        SELECT todos.*, users.email, users.password
        FROM todos
        JOIN users ON todos.user_id = users.id;
    `;
    const res = await client.query(joinQuery);
    const results = res.rows;
    console.log("Todos with User Details:", results);
}
getAllTodosWithUserDetails();
//# sourceMappingURL=advance-3.js.map
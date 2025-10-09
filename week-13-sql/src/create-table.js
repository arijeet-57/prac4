"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function createTable() {
    const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    const client = await (0, utils_1.getClient)();
    await client.query(createUserTableQuery);
    const createTodosQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;
    await client.query(createTodosQuery);
    console.log("Table created successfully!");
}
createTable();
//# sourceMappingURL=create-table.js.map
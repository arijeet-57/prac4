"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function addIndex() {
    const client = await (0, utils_1.getClient)();
    const createIndexQuery = 'CREATE INDEX idx_todos_user_id ON todos(user_id)';
    await client.query(createIndexQuery);
    console.log("Index added successfully on user_id column of todos table!");
}
addIndex();
//# sourceMappingURL=create-index.js.map
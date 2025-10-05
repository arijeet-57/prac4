import { Hono } from 'hono'
import fs from "fs"

const app = new Hono()

app.post('/signup', async(c) => {
  const data = await c.req.json();
  const {username, password} = data;

  if(!username || !password) {
    return c.text("Username and password is mandatory!", 400)
  }

  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"))
  const exists = users.find((u) => u.username === username); //need to fix this line

  if (exists) {
    return c.text("Username already exists,try loggin in...", 400)
  }

  users.push({username, password});
  fs.writeFileSync("users.json", JSON.stringify(users));
  return c.text("Singup successfull...")
})

export default app

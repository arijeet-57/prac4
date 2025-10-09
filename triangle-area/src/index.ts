import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/area', async (c) => {
  const data = await c.req.json();
  const base = Number(data.base);
  const height = Number(data.height);

  if(isNaN(base) || isNaN(height) || base <=0 || height <=0) {
    return c.json({
      ERROR: "Please provide valid data and +ve numbers"
    })
  }

  const area = 0.5 * base * height;

  return c.json({
    base: base,
    height: height,
    area: area
  })
  
})

export default app

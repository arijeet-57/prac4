import { Hono } from 'hono';
const app = new Hono();
const fruits = [
    'Apple', 'Banana', 'Kiwi', 'Watermelon', 'Lichi', 'Blueberry'
];
app.get('/', (c) => {
    return c.text("Random fruit generator API - visit '/fruits' to get the random fruits name on each refresh");
});
app.get('/fruits', (c) => {
    const randFruit = fruits[Math.floor(Math.random() * fruits.length)];
    return c.json({
        fruit: randFruit
    });
});
export default app;
//# sourceMappingURL=index.js.map
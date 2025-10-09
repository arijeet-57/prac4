import { Hono } from 'hono';
const app = new Hono();
app.get('/', (c) => {
    return c.text("To get the sum send the numbers in the query after the '/sum' route as '?a=3&b=5'");
});
app.get('/sum', (c) => {
    const a = Number(c.req.query('a'));
    const b = Number(c.req.query('b'));
    if (!a || !b) {
        return c.json({
            ERROR: "INVALID INPUTS"
        });
    }
    if (isNaN(a) || isNaN(b)) {
        return c.json({
            ERROR: "Please provide a valid number for a and b"
        }, 400);
    }
    return c.json({
        a,
        b,
        sum: a + b
    });
});
export default app;
//# sourceMappingURL=index.js.map
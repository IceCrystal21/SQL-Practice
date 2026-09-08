import express from 'express';

const app = express();
const PORT = 5000;


app.get("/app/users", (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    res.status(200).json(users);
})

app.listen(PORT , () => {
    console.log(`Running on port: ${PORT}`)
});

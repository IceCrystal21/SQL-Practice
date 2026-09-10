import express from 'express';
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))

app.get("/app/users", (req, res) => {
    const users = 
        { 
            id: 1, 
            name: 'Alice',
            note: "This is a test"
        };
    res.status(200).json(users);
})

app.listen(PORT , () => {
    console.log(`Running on port: ${PORT}`)
});

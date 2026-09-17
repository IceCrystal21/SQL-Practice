import express from 'express';
import cors from "cors";
import db from "./database";

const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))

app.use(express.json())

app.post("/app/add_user/", (req, res) => {
    const { username, email, password } = req.body
    db.query(`INSERT INTO users (USERNAME, EMAIL, PASSWORD)
       VALUES (?, ?, ?)`,
       [username, email, password],
       (err, result) => {
        
        if (err) {
            res.status(500).json({message: err.message})
        }
        res.status(201).json({message: "User created successfully!"})
       }
    )
})

app.listen(PORT , () => {
    console.log(`Running on port: ${PORT}`)
});

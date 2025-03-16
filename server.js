const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const mongoose = require("mongoose");
const Budget = require("./Budget");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use('/',express.static('public'));

mongoose
  .connect("mongodb://127.0.0.1:27017/myBudgetDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get('/hello',(req,res) =>{
    res.send("Hello World!");
});

app.get("/budget", async (req, res) => {
    try {
      const budgetData = await Budget.find();
      res.json(budgetData);
    } catch (err) {
      console.error("Error fetching budget data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.post("/budget", async (req, res) => {
    try {
        const { myBudget } = req.body;

        if (!Array.isArray(myBudget)) {
            return res.status(400).json({ error: "Invalid format" });
        }

        const newBudgets = myBudget.map(item => {
            if (!item.title || !item.budget || !item.color) {
                throw new Error("All fields are required for each entry.");
            }
            return { title: item.title, value: item.budget, color: item.color };
        });

        // Insert multiple documents at once
        const insertedBudgets = await Budget.insertMany(newBudgets);
        res.status(201).json(insertedBudgets);
    } catch (err) {
        console.error("Error adding budget data:", err);
        res.status(400).json({ error: err.message });
    }
});

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});
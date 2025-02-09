// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors());
app.use('/',express.static('public'))
const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 50
        },
        {
            title: 'Rent',
            budget: 500
        },
        {
            title: 'Grocery',
            budget: 200
        },
    ]
};



app.get('/hello', (req, res) => {
    res.send('Hello world');
});
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
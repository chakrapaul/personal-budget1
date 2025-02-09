// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


// app.use(cors());

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
            budget: 110
        },
    ]
};

app.use('/',express.static('public'))

// app.get('/budget', (req, res) => {
//     fs.readFile(path.join(__dirname, 'budget-data.json'), 'utf8', (err, data) => {
//       if (err) {
//         console.log('Error reading the JSON file:', err);
//         return res.status(500).send('Error reading budget data');
//       }
//       res.json(JSON.parse(data));
//     });
//   });

app.get('/hello', (req, res) => {
    res.send('Hello world');
});
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
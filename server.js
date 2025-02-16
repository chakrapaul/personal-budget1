// Budget API

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3000;


// app.use(cors());

// const budget = {
//     myBudget: [
//         {
//             title: 'Eat out',
//             budget: 50
//         },
//         {
//             title: 'Rent',
//             budget: 500
//         },
//         {
//             title: 'Grocery',
//             budget: 110
//         },
//     ]
// };

// app.use('/',express.static('public'))



// app.get('/hello', (req, res) => {
//     res.send('Hello world');
// });
// app.get('/budget', (req, res) => {
//     res.json(budget);
// });

// app.listen(port, () => {
//     console.log(`API served at http://localhost:${port}`);
// });
// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Use CORS if needed
app.use(cors());

// Serve static files
// app.use('/', express.static('public'));

// Endpoint to get budget data
// app.get('/hello', (req, res) => {
//     res.send('Hello world');
// });

app.get('/budget', (req, res) => {
    // Read the budget data from the JSON file
    fs.readFile(path.join(__dirname, 'budget-data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read budget data' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});

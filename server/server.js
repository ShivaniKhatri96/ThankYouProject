const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/people', (req, res) => {
    const people = [
        {name: 'John', occupation: 'Software Engineer'},
        {name: 'Jane', occupation: 'Data Scientist'},
        {name: 'Shiva', occupation: 'Backend Developer'},
    ];

    res.json(people);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
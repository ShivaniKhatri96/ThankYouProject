const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())
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
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())
app.get('/api/people', (req, res) => {
    const people = [
        {name: 'Dante Solis', occupation: 'Coach BeCode'},
        {name: 'Shiva Khatri', occupation: 'Backend Developer'},
        {name: 'Daniel Diaz', occupation: 'Backend Developer'},
        {name: 'Alisan Cavus', occupation: 'Fullstack Developer'},
        {name: 'Ivan D\'Andrea', occupation: 'Backend Developer'},
        {name: 'Florian', occupation: 'Co-founder Weavely.ai'},
        {name: 'Jesse', occupation: 'Co-founder Weavely.ai'},
        {name: 'Jeremy Van Mullem', occupation: 'Founder Relieve Furniture'},
        {name: 'Patrick Downie', occupation: 'Co-founder Relieve Furniture'},   
        {name: 'Mohan Khatri', occupation: 'Dad'},
        {name: 'Durga Khatri', occupation: 'Mom'},
    ];

    res.json(people);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
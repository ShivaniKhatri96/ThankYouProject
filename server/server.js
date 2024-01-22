//express is the web application framework for Node.js
// simplifies the process of creating web servers and handling HTTP requests and responses
const express = require('express');
const app = express();
//cors: Cross-Origin Resource Sharing (CORS) using the `cors` middleware
// It allows or restricts cross-origin HTTP requests
const cors = require('cors');
const PORT = 8000; // port number on which the server will listern for incoming requests

app.use(cors())
// app.get defines a route for handling HTTP GET requests
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
//listens for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
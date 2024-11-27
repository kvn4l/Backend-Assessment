// Import Express
const express = require('express');

// Create an instance of the Express app
const app = express();

// Use JSON middleware to parse request bodies
app.use(express.json());


// Add a GET route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, welcome to the server!');
  });

// POST endpoint at "/calculate"
app.post('/calculate', (req, res) => {
  // Extract numbers from the request body
  const { num1, num2 } = req.body;

  // Validate that both num1 and num2 are provided and are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers' });
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Return the sum in JSON format
  res.json({ sum });
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

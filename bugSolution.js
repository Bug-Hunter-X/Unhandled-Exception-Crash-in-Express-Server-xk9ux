const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    //Simulate an error
    //const result = 1 / 0; 
    res.send('Hello World!');
  } catch (error) {
    console.error('Error in request handler:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
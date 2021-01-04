const express = require('express');
const app = express();

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

app.get('/', (req, res) => {
  console.log('Hello world');
});



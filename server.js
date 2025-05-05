const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'frontend','public')));

app.listen(PORT, () => {
  console.log(`🍽️  Delish Restaurant running at http://localhost:${PORT}`);
});

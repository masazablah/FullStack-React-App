const express = require('express');
const cors = require('cors');
const router = require('./routers/todo')

const app = express();
app.use(cors());
app.use(express.json());

app.use(router)
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

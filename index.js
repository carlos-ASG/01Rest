const express = require('express');
const bodyParser = require('body-parser');

const taskRouters = require('./routers/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/task',taskRouters);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
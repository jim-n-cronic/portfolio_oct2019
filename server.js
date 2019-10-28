const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const PORT = process.env.PORT || 6969;

app.use(bodyParse());
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require html routes
require('./app/routes/htmlRoutes')(app);
// require api routes

// LISTENER
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT:: ${PORT}`));

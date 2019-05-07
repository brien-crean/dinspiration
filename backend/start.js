const mongoose = require('mongoose');

// import environmental variables
require('dotenv').config({ path: 'variables.env' });

// Connect to db and handle bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫🚫🚫 → ${err.message}`);
});

// import models - available throughout app via mongoose.model(<ModelName>)
require('./models/Recipe');

const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

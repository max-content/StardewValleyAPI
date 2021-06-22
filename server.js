const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
require('./server/config/mongoose.config'); // This is the db configuration
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// ================== Routes ==================
require('./server/routes/default.routes')(app); //index
require('./server/routes/people.routes')(app); //add all route files
require('./server/routes/seasons.routes')(app);
require('./server/routes/crops.routes')(app);
require('./server/routes/minerals.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
const express = require('express');
const apiRoutes = require('./routes/apiroutes')
const htmlRoutes = require('./routes/htmlroutes')

//creates express application
const app = express();

//set port to 3001;
const PORT = process.env.PORT || 3001 ;
 
//parse strings
app.use(express.urlencoded ({ extended: true }));

//parse JSON data
app.use(express.json());

//express middleware function 
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listens to connections on port 3001
app.listen(PORT, () => {
    console.log(`API server is running on ${PORT}`);
});
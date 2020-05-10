const express = require('express');
const app= express();
const expressLayouts = require('express-ejs-layouts');


//ejs
app.use(expressLayouts);
app.set('view engine','ejs');

// routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));






app.listen(5000, () => console.log('server up and running'));
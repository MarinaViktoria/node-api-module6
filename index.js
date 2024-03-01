const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recipesRoute = require('./routes/FetchRecipes')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/recipes', recipesRoute);

app.listen(5000, () => {
    console.log(`It's working!!!`)
})
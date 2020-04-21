const express = require('express')
const path = require('path')
const app = express();

app.use(express.static(__dirname + '/dist/angular-heroku-environment-vars'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/angular-heroku-environment-vars/index.html'));
});

app.listen(process.env.PORT || 4200, () => {
    console.log('Server running');
});
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/amithawebsite'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/amithawebsite/index.html'));
});
console.log('Console listening!');
//    pk_d1dc67e159174b1082f6e525a8487d54

const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const firstName = "Christopher";
const lastName = "Gleason";
const fullName = `${firstName} ${lastName}`;
app.get('/', function (req, res) {
    res.render('home', {
        fullName: fullName
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
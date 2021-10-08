const express = require('express');
const router = require('./routes');
const app = express();

const PORT = process.env.API_KEY || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/uploads'));
app.use(router);

app.listen(PORT, () => console.log(`WE\'RE RUNNING ON ${PORT}`));

module.exports = {
    app,
}
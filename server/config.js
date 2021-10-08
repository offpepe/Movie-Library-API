const express = require('express');
const multer = require('multer');
const app = express();

const PORT = process.env.API_KEY || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const upload = multer({ dest: 'uploads/' });

app.listen(PORT, () => console.log(`WE\'RE RUNNING ON ${PORT}`));

module.exports = {
    app,
    upload,
}
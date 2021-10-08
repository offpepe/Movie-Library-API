const express = require('express');
const multer = require('multer');

const app = express();

const PORT = process.env.API_KEY || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => res.status(200).json('SpoOooOoOoOoOoOoOooky month 👻'));

app.listen(PORT, () => console.log(`WE\'RE RUNNING ON ${PORT}`));

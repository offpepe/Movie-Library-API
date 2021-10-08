const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let schema;

const connection = async () => {
    if (schema) return Promise.resolve(schema);
    return MongoClient.connect(MONGODB_URL, OPTIONS)
    .then((conn) => conn.db('multer_playground'))
    .then((dbschema) => { 
        schema = dbschema;
        return schema;
     }).catch((err) => console.log(err));
};

module.exports = connection;
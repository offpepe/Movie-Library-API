const { MongoClient } = require('mongodb');

const MONGODB_URL = `mongodb+srv://offpepe:${process.env.DBPASSWORD}@mongocluster.oex1m.mongodb.net/movie-library?retryWrites=true&w=majority`;

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let schema;

const connection = async () => {
    if (schema) return Promise.resolve(schema);
    return MongoClient.connect(MONGODB_URL, OPTIONS)
    .then((conn) => conn.db('movie_library'))
    .then((dbschema) => { 
        schema = dbschema;
        return schema;
     }).catch((err) => console.log(err));
};

module.exports = connection;

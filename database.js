const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/helPublica';

mongoose.connect(URI)
    .then(db => console.log('Data Base está conectado!'))
    .catch(err => console.error(err));

module.exports = mongoose;
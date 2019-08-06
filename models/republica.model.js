const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;

const republicaSchema = new Schema({
    nome: { type: String, required: true},
    email: { type: String, required: true },
    endereco: {type: String, required: true},
    telefone: {type: Number, required: false},
    despesas: [{
        _id:ObjectId 
    }],
    moradores: [{
        _id:ObjectId
    }]
});

module.exports = mongoose.model('Republica', republicaSchema);
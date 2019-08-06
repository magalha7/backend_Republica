const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: { type: String, required: true},
    sobrenome: { type: String, required: true },
    email: { type: String, required: true },
    endereco: {type: String, required: true},
    password: { type: String, required: true},
    confPassword: {type: String, required: true},
    tarefas: [{
        _id: ObjectId
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);
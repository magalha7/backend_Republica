const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarefaSchema = new Schema({
    nome: { type: String, required: true},
    diasSemana: { type: String, required: true }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const despesaSchema = new Schema({
    nome: { type: String, required: true},
    valor:{type: Number, required: true},
    dataVencimento: { type: String, required: true }
});

module.exports = mongoose.model('Despesa', despesaSchema);
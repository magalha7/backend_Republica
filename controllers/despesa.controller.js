const Despesa = require('../models/despesa');

const despesaCtrl = {};

despesaCtrl.getDespesas = async (req, res, next) => {
    const despesas = await Despesa.find();
    res.json(despesas);
};

despesaCtrl.createDespesa = async (req, res, next) => {
    const despesa = new Despesa({
        nome: req.body.nome,
        valor: req.body.valor,
        dataVencimento: req.body.dataVencimento                        
    });

    await despesa.save();
    res.json({status: 'Despesa criada'});
};

despesaCtrl.getDespesa = async (req, res, next) => {
    const { id } = req.params;
    const despesa = await Despesa.findById(id);
    res.json(despesa);
};

despesaCtrl.editDespesa = async (req, res, next) => {
    const { id } = req.params;
    const despesa = {
        nome: req.body.nome,
        valor: req.body.valor,
        dataVencimento: req.body.dataVencimento      
    };
    await Despesa.findByIdAndUpdate(id, {$set: despesa}, {new: true});
    res.json({status: 'Despesa Atualizada!'});
};

despesaCtrl.deleteDespesa = async (req, res, next) => {
    await Despesa.findByIdAndRemove(req.params.id);
    res.json({status: 'Despesa Deletada!'});
};

module.exports = despesaCtrl;
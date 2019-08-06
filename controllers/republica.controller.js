const Republica = require('../models/republica.model');

const republicaCtrl = {};

republicaCtrl.getRepublicas = async (req, res, next) => {
    const republicas = await Republica.find();
    res.json(republicas);
};

republicaCtrl.createRepublica = async (req, res, next) => {
    const republica = new Republica({
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        despesas: req.body.despesas,
        moradores: req.body.moradores
    });
    await republica.save();
    res.json({status: 'Republica criada'});
};

republicaCtrl.getRepublica = async (req, res, next) => {
    const { id } = req.params;
    const republica = await Republica.findById(id);
    res.json(republica);
};

republicaCtrl.editRepublica = async (req, res, next) => {
    const { id } = req.params;
    const republica = {
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        despesas: req.body.despesas,
        moradores: req.body.moradores
    };
    await Republica.findByIdAndUpdate(id, {$set: republica}, {new: true});
    res.json({status: 'República Atualizada!'});
};

republicaCtrl.deleteRepublica = async (req, res, next) => {
    await Republica.findByIdAndRemove(req.params.id);
    res.json({status: 'Republica Deletada!'});
};

module.exports = republicaCtrl;
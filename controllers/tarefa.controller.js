const Tarefa = require('../models/tarefa');

const tarefaCtrl = {};

tarefaCtrl.getTarefas = async (req, res, next) => {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
};

tarefaCtrl.createTarefa = async (req, res, next) => {
    const tarefa = new Tarefa({
        nome: req.body.nome,
        diasSemana: req.body.diasSemana                        
    });

    await tarefa.save();
    res.json({status: 'Tarefa criada'});
};

tarefaCtrl.getTarefa = async (req, res, next) => {
    const { id } = req.params;
    const tarefa = await Tarefa.findById(id);
    res.json(tarefa);
};

tarefaCtrl.editTarefa = async (req, res, next) => {
    const { id } = req.params;
    const tarefa = {
        nome: req.body.nome,
        diasSemana: req.body.diasSemana        
    };
    await Tarefa.findByIdAndUpdate(id, {$set: tarefa}, {new: true});
    res.json({status: 'Tarefa Atualizada!'});
};

tarefaCtrl.deleteTarefa = async (req, res, next) => {
    await Tarefa.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarefa Deletada!'});
};

module.exports = tarefaCtrl;
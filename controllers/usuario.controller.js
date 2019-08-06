const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        endereco: req.body.endereco,
        password: req.body.password,
        confPassword: req.body.confPassword,
        tarefas: req.body.tarefas                        
    });

    await usuario.save();
    res.json({status: 'Usuario criado'});
};

usuarioCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        endereco: req.body.endereco,
        password: req.body.password,
        confPassword: req.body.confPassword,
        tarefas: req.body.tarefas      
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuário Atualizado!'});
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Deletado!'});
};

module.exports = usuarioCtrl;
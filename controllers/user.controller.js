const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Email já se encontra cadastrado!']);
            else
                return next(err);
        }

    });
}

module.exports.editUser = async (req, res, next) => {
    const user = {
        _id: req.body._id,
        nome: req.body.fullName,
        sobrenome: req.body.email,
        email: req.body.password,
        address: req.body.address,
        number: req.body.number,
        neighborhood: req.body.neighborhood,
        city: req.body.city,
        cep: req.body.cep,
        state: req.body.state,
        country: req.body.country
        
    };
    User.findByIdAndUpdate(_id, {$set: user}, {new: true});
    res.json({status: 'Usuário Atualizado!'});
};

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Usuario não pode ser encontrado!.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['_id','fullName','email', 'password']) });
        }
    );
}
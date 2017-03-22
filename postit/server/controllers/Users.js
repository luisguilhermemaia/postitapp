const User = require('../models').User;
const Postit = require('../models').Postit;

module.exports = {
    create(req, res) {
        return User
            .create({
                username: req.body.username,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return User
            .findAll({
                include: [{
                    model: Postit,
                    as: 'postits',
                }]
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
    }, retrieve(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Postit,
                    as: 'postits',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'Usuário não encontrado',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'Usuário não encontrado',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Postit,
                    as: 'postits',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'Usuário não encontrado',
                    });
                }
                return user
                    .update({
                        username: req.body.username || user.username,
                    })
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

};
const Postit = require('../models').Postit;

module.exports = {
    create(req, res) {
        return Postit
            .create({
                titulo: req.body.titulo,
                mensagem: req.body.mensagem,
                userId: req.params.userId,
            })
            .then(postit => res.status(201).send(postit))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Postit
            .find({
                where: {
                    id: req.params.postitId,
                    userId: req.params.userId,
                },
            })
            .then(postit => {
                if (!postit) {
                    return res.status(404).send({
                        message: 'Postit não encontrado',
                    });
                }

                return postit
                    .update({
                        titulo: req.body.titulo || postit.titulo,
                        mensagem: req.body.mensagem || postit.mensagem,
                    })
                    .then(updatedPostit => res.status(200).send(updatedPostit))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Postit
            .find({
                where: {
                    id: req.params.postitId,
                    userId: req.params.userId,
                },
            })
            .then(postit => {
                if (!postit) {
                    return res.status(404).send({
                        message: 'Postit não encontrado',
                    });
                }

                return postit
                    .destroy()
                    .then(() => res.redirect('/').status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    get(req, res){

    }

};
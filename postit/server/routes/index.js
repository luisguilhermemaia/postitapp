const userController = require('../controllers').Users;

const postitController = require('../controllers').Postits;

module.exports = (app) => {
    app.post('/api/users', userController.create);

    app.get('/api/users', userController.list);

    app.get('/api/users/:userId', userController.retrieve);

    app.put('/api/users/:userId', userController.update);

    app.delete('/api/users/:userId', userController.destroy);

    app.post('/api/postit/:userId/', postitController.create);

    app.put('/api/postit/:userId/:postitId', postitController.update);

    app.delete('/api/postit/:userId/:postitId', postitController.destroy);

    app.all('/api/postit/:userId/', (req, res) =>
        res.status(405).send({
            message: 'Método não permitido',
        }));
};
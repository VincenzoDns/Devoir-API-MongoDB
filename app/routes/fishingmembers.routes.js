module.exports = (app) => {
    const fishingmembers = require('../controllers/fishingmembers.controller.js');

    // create
    app.post('/fishingmembers', fishingmembers.create);

    // return all
    app.get('/fishingmembers', fishingmembers.findAll);

    // return one with id
    app.get('/fishingmembers/:fishingmembersId', fishingmembers.findOne);

    // update
    app.put('/fishingmembers/:fishingmembersId', fishingmembers.update);

    // delete
    app.delete('/fishingmembers/:fishingmembersId', fishingmembers.delete);
}
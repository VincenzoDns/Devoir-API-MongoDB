const Fishing = require('../models/fishingmembers.model.js');

// create
exports.create = (req, res) => {

    if(!req.body.birthday) {
        return res.status(400).send ({
            message: "Birthday can not be empty"
        });
    }

    const fishingmembers = new Fishing({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        address: req.body.address,
        number: req.body.number,
        postalcode: req.body.postalcode,
        city: req.body.city,
        country: req.body.country
        
    });

    fishingmembers.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating new fishing members."
        });
    });
};

// return all
exports.findAll = (req, res) => {

    Fishing.find()
    .then(fishingmembers => {
        res.send(fishingmembers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while returning members."
        });
    });
};

// return one
exports.findOne = (req, res) => {

        Fishing.findById(req.params.fishingmembersId)
        .then(fishingmembers => {
            if(!fishingmembers) {
                return res.status(404).send({
                    message: "Members not found with id" + req.params.fishingmembersId
                });
            }
            res.send(note);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Members not found with id" + req.params.fishingmembersId
                });
            }
            return res.status(500).send({
                message: "Error returning members with id" + req.params.fishingmembersId
            });
        });
};

// update
exports.update = (req, res) => {

        if(!req.body.birthday) {
            return res.status(400).send({
                message: "Can not be empty"
            });
        }

        Fishing.findByIdAndUpdate(req.params.fishingmembersId, {
        
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            birthday: req.body.birthday,
            address: req.body.address,
            number: req.body.number,
            postalcode: req.body.postalcode,
            city: req.body.city,
            country: req.body.country
        }, {new: true})
        .then(fishingmembers => {
            if(!fishingmembers) {
                return res.status(404).send({
                    message: "Members note found with id" + req.params.fishingmembersId
                });
            }
            res.send(fishingmembers);
        }).catch(err => {
            if(err.kind === 'ObjectifId') {
                return res.status(404).send({
                    message: "Members not found with id" + req.params.fishingmembersId
                });
            }
            return res.status(500).send({
                message: "Error updating members with id" + req.params.fishingmembersId
            });
        });
};

// delete
exports.delete = (req, res) => {

        Fishing.findByIdAndRemove(req.params.fishingmembersId)
        .then(fishingmembers => {
            if(!fishingmembers) {
                return res.status(404).send({
                    message: "Members not found with id" + req.params.fishingmembersId
            });
        }
        res.send({message: "Members deleted successfully !"});
        }).catch(err => {
            if(err.kind === 'ObjectifId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Members not found with id" + req.params.fishingmembersId
                });
            }
            return res.status(500).send({
                message: "Could not delete member with id" + req.params.fishingmembersId
            });
        });
};
const db = require("../models");

//export methods
module.exports = {
    findAll: (req, res) => {
        return db.Article.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    create: (req, res) => {
        return db.Article.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    delete: (req, res) => {
        return db.Article.findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
const express = require('express');
const route = express.Router();
const { Video, User } = require('./models');
const passport=require('passport');
const jwt = require('jsonwebtoken');
const jwtAuth = passport.authenticate('jwt', {session: false});



route.get('/', (req, res) => {
    Video.find().limit(50).sort({created:-1})
        .then(items => {
            res.json(items.map(item => item.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.statusCode(500).json({ error: 'Err in Video GET' });
        });
});

route.get('/user/:userId', (req, res) => {
    Video.find({
        user: req.params.userId
    })
    .then(items => {
        res.json(items.map(item => item.serialize()))
    })
    .catch(err =>{
        console.error(err);
        res.statusCode(500).json({ error: 'Err in User Video Get' });
    });
});

route.get('/:id', (req, res) => {
    Video.findById(req.params.id)
        .then(item => res.json(item.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'ERR in Video GET ID' });
        });
});

route.post('/',jwtAuth, (req, res) => {
    const requiredFields = ['video1','video2','start1', 'start2', 'end1', 'end2'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    console.log(req.user,"From routes.js 43");
    
    Video.create({
            video1: req.body.video1,
            video2: req.body.video2,
            start1: req.body.start1,
            start2: req.body.start2,
            end1: req.body.end1,
            end2: req.body.end2,
            user: req.user.id,
            title: req.body.title
        })
        .then(Video => res.status(201).json(Video.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'ERR in Create' });
        });
});

route.delete('/:id',jwtAuth, (req, res) => {
    Video
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'ERR in Delete' });
        });
});

route.put('/:id',jwtAuth, (req, res) => {

    if (!(req.params.id && req.params.id === req.body.id)) {
        res.status(400).json({
            error: 'Request path ID and body ID values must match'
        });
        return
    }

    const updated = {};
    const updateableFields = ['name','amount'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    Video
        .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
        .then(updatedIngredient => res.status(204).end())
        .catch(err => res.status(500).json({
            message: 'Something has messed up'
        }));

});

module.exports = route;
const mongoose = require('mongoose');
const Chance = require('chance');
const bcrypt = require('bcrypt');
const chance = new Chance();
const User = require('../models/user.model');

module.exports = () => {
    const usersToSeed = [
        {firstName: chance.first(), lastName: chance.last(), email: 'aperson@email.com', password: bcrypt.hashSync('@super1', 10)},
        {firstName: chance.first(), lastName: chance.last(), email: 'bperson@email.com', password: bcrypt.hashSync('@super1', 10)},
        {firstName: chance.first(), lastName: chance.last(), email: 'cperson@email.com', password: bcrypt.hashSync('@super1', 10)},
        {firstName: chance.first(), lastName: chance.last(), email: 'dperson@email.com', password: bcrypt.hashSync('@super1', 10)}
    ]
    return new Promise((resolve, reject) => {
        User.collection.insertMany(usersToSeed, (err, users) => {
            if (!err)
                resolve(users);
            else
                reject(err);
        });
    });
}
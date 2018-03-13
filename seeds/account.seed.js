const mongoose = require('mongoose');
const User = require('../models/user.model');
const Account = require('../models/account.model');

module.exports = () => {
    return User.find({}, (err, users) => {
        if (!err) {
            const accountsToSeed = [
                {number: '00000001', type: 1, amount: 5025.22, userId: users[0]._id},
                {number: '00000002', type: 2, amount: 15025.35, userId: users[0]._id},
                {number: '00000003', type: 3, amount: 1024.53, userId: users[0]._id},
                {number: '00000004', type: 1, amount: 1356.35, userId: users[1]._id},
                {number: '00000005', type: 3, amount: 32464.32, userId: users[1]._id},
                {number: '00000006', type: 1, amount: 2356.66, userId: users[2]._id},
                {number: '00000007', type: 2, amount: 12566.56, userId: users[2]._id},
                {number: '00000008', type: 3, amount: 12515.52, userId: users[2]._id},
                {number: '00000009', type: 4, amount: 3266.52, userId: users[2]._id},
                {number: '00000010', type: 1, amount: 125.64, userId: users[3]._id},
                {number: '00000011', type: 2, amount: 56.53, userId: users[3]._id},
                {number: '00000012', type: 3, amount: 12511.25, userId: users[3]._id},
            ];

            return new Promise((resolve, reject) => {
                Account.collection.insertMany(accountsToSeed, (err, accounts) => {
                    if (!err)
                        resolve(accounts);
                    else
                        reject(err);
                });
            });
        }
    });
}

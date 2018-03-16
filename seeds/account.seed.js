const mongoose = require('mongoose');
const User = require('../models/user.model');
const Account = require('../models/account.model');

module.exports = (users) => {
    const accountsToSeed = [
        {name: 'Chequing', type: 1, amount: 5025.22, user_id: users[0]._id},
        {name: 'Saving', type: 2, amount: 15025.35, user_id: users[0]._id},
        {name: 'Credit Card', type: 3, amount: 1024.53, user_id: users[0]._id},
        {name: 'Chequing', type: 1, amount: 1356.35, user_id: users[1]._id},
        {name: 'Credit Card', type: 3, amount: 32464.32, user_id: users[1]._id},
        {name: 'Chequing', type: 1, amount: 2356.66, user_id: users[2]._id},
        {name: 'Saving', type: 2, amount: 12566.56, user_id: users[2]._id},
        {name: 'Credit Card', type: 3, amount: 12515.52, user_id: users[2]._id},
        {name: 'Line of Credit', type: 4, amount: 3266.52, user_id: users[2]._id},
        {name: 'Chequing', type: 1, amount: 125.64, user_id: users[3]._id},
        {name: 'Saving', type: 2, amount: 56.53, user_id: users[3]._id},
        {name: 'Credit Card', type: 3, amount: 12511.25, user_id: users[3]._id},
    ];

    return new Promise((resolve, reject) => {
        Account.collection.insertMany(accountsToSeed, (err, accounts) => {
            if (!err)
                resolve(accounts.ops);
            else
                reject(err);
        });
    });
}

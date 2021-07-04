const User = require('../models/user');
const faker = require('faker');

module.exports = {
    getUsers: (filter) => {
        try {
            return User.find({ ...filter });
        } catch (error) {
            throw (error);
        }

    },

    getUsersPage: (page = 1, limit = 15, filters) => {
        try {
            return User.paginate({ ...filters }, { page, limit });
        } catch (error) {
            throw (error);
        }

    },

    createUser: (user) => {
        try {
            const newUser = new User(user);
            return newUser.save();
        } catch (error) {
            throw (error);
        }

    },

    generateUsers: (quantity = 50) => {
        try {
            const fakeUsers = [];
            for (let i = 0; i < quantity; i++) {
                fakeUsers.push(fakeUser());
            }

            return User.insertMany(fakeUsers);
        } catch (error) {
            throw (error);
        }

    },

    deleteAllUsers: () => {
        try {
            return User.deleteMany({});
        } catch (error) {
            throw (error);
        }

    }
}

function fakeUser() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        description: faker.company.catchPhraseDescriptor()
    }
}
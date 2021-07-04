const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

module.exports = {

    // connect to db
    connect: async () => {
        // await mongod.start();
        // const url = mongod.getUri();
        // const mongooseOpts = {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     poolSize: 10
        // };
        // await mongoose.connect(url, mongooseOpts);
        const mongod = new MongoMemoryServer();
        await mongod.start();
        const mongoUri = mongod.getUri();

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },

    // disconnect and close connection
    clostDatabase: async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    },

    // clear the db
    clearDatabase: async () => {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
}

const db = require('../db-test');
const UserModel = require("./user");

const validUser = {
    firstName: 'roei',
    lastName: ' Adada',
    email: 'roeia100@gmail.com',
    password: 'blahblah10BLAH',
    description: 'description blah'
};

const invalidUser = {
    firstName: 'roei',
    lastName: ' Adada',
    email: 'roeia100@gmail.com',
    password: '',
    description: ''
};

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(done => {
    db.clostDatabase().finally(
        () => {
            console.log('finalizied');
            done();
        }
    )
});

describe('User model test', () => {
    describe('valid user', () => {
        it('should allow', async () => {
            const user = new UserModel(validUser);
            await expect(user.save()).resolves.not.toThrow();
        });
    });

    describe('invalid user', () => {
        describe('empty fields', () => {
            it('should throw error', async () => {
                const user = new UserModel(invalidUser);
                await expect(user.save()).rejects.toThrow();
            });
        });

        describe('duplicated emails', () => {
            it('should throw error', async () => {
                const user = new UserModel(validUser);
                const dupEmail = UserModel(validUser);
                await user.save();
                await expect(dupEmail.save()).rejects.toThrow();
            });
        });
    });
});


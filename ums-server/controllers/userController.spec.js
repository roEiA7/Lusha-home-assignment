const fixture = require('./userController');
const User = require('../models/user');
const db = require('../db-test');

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(done => {
    db.clostDatabase().finally(
        () => {
            console.log('finalizied');
            done();
        }
    )
})

describe('getUsers', () => {
    it('should return users list', async () => {
        await fixture.createUser(userMock);
        const results = await fixture.getUsers();

        expect(results.length).toBe(1);
    });
});

describe('createUser', () => {
    describe('valid user', () => {
        it('should create user', async () => {
            const user = await fixture.createUser(userMock);
            expect(user).toBeTruthy();
        });
    });

    describe('invalid user', () => {
        it('should throw error', async () => {
            await expect(
                fixture.createUser(invalidUserMock)
            ).rejects.toThrow()
        });
    });
});

describe('generateUsers', () => {
    it('should generate n users', async () => {
        const n = 10;
        const users = await fixture.generateUsers(n);
        expect(users.length).toBe(n);
    });
});

describe('deleteAllUsers', () => {
    it('should delete all users', async () => {
        await fixture.generateUsers();
        await fixture.deleteAllUsers();
        const results = fixture.getUsers();
        expect(results.length).toBeFalsy();
    });
});


const userMock = {
    firstName: 'first',
    lastName: 'last',
    email: 'mail@gmail.com',
    password: 'passFASDF23',
    description: 'fasdf'
};

const invalidUserMock = {
    firstName: 'first',
    lastName: 'last',
    email: '',
    password: '',
    description: ''
}
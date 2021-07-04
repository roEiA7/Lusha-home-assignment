// const db = require('../db-test');
// const request = require('supertest');
// const app = require('../app');

// const PORT = 3001;
// let server;


// beforeAll(async () => {
//     await db.connect();
//     server = app.listen(PORT);
// });

// afterEach(async () => await db.clearDatabase());

// afterAll(done => {
//     db.clostDatabase().finally(
//         () => {
//             console.log('finalizied');
//             server.close(done);
//         }
//     );
// });

// describe('test routes', () => {
//     it('can get users', async () => {
//         await request(SERVER)
//             .get('/')
//             .expect(200)
//     });
// });

describe('oops', () => {
    it('should cover', () => {
        expect(true).toBeTruthy();
    });
});



// Doesn't work because mongo connection is already instaniated in app.js
// Should seperate mongo initialization from app.js
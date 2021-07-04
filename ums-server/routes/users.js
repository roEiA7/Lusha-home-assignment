const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET all users list
router.get('/', async (req, res, next) => {
    try {
        const results = await userController.getUsers();
        res.status(200).json({
            message: 'Fetched all users successfully',
            results
        });
    } catch (error) {
        const message = 'Failed to get users: ' + error;
        res.status(500).json({
            message: message
        });
    }
});

// GET paginated users list
router.get('/:page/:limit', async (req, res, next) => {
    try {
        const page = req.params.page;
        const limit = req.params.limit;
        const filters = req.query;
        const results = await userController.getUsersPage(page, limit, filters);
        res.status(200).json({
            messgae: 'Fetched users page successfully',
            results
        });
    } catch (error) {
        const message = 'Failed to get users: ' + error;
        res.status(500).json({
            message: message
        });
    }
});

// POST create user
router.post('/', async (req, res, next) => {
    try {
        const user = req.body;
        await userController.createUser(user);
        res.status(201).json({
            message: 'User created successfully'
        });
    } catch (error) {
        res.status(400).json(
            error.errors
        );
    }
});

// POST generate users
router.post('/generate', async (req, res, next) => {
    try {
        await userController.generateUsers();
        res.status(201).json({
            message: 'Users generated successfully'
        });
    } catch (error) {
        res.status(400).json(
            error.errors
        );
    }
});


// DELETE all users
router.delete('/', async (req, res, next) => {
    try {
        await userController.deleteAllUsers();
        res.status(200).json({
            message: 'All users deleted successfully'
        });
    } catch (error) {
        res.status(400).json(
            error.errors
        );
    }
});

module.exports = router;

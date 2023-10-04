import dotenv from 'dotenv';
import {logger} from "./services/logger.js";
import {startApiServer} from "./api/index.js";
import {initDb} from "./services/people.js";

(async () => {
    dotenv.config();
    await initDb()
    logger.info(`starting facebug with application`)
    startApiServer()
})();

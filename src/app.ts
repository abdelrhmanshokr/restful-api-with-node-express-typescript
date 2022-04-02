import express from 'express';
import config from 'config';

import log from './logger/index';

const port = config.get("PORT") as number;
const host = config.get("HOST") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, () => {
    // console.log(`Server up on http://${host}:${port}`);
    log.info(`Server up on http://${host}:${port}`); // for this line instead of only printing a message to the console
    // we used log.info to pring a message with a timestamp later on we can save the logs somewhere to review them 
});
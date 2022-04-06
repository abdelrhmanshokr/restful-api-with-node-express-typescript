import mongoose from 'mongoose';
import config from 'config';

import log from '../logger/index';
import { ConnectionOptions } from 'tls';

function connect(){
    const dbUri = config.get("DBURI") as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true
        } as ConnectionOptions)
        .then(() => {
            log.info("Database connected successfully");
        })
        .catch((err) => {
            log.info(`Database connection error ${err}`);
            process.exit(1); // exits the process with failure
        });
}

export default connect;
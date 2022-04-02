// this file is used for logging
// telling us which process did what action in what time 
// later on we can use logger to save the system logs on a separate file to review them
import logger from 'pino';
import dayjs from 'dayjs';

// first format out log
const log = logger({
    prettyPrint: true,
    base: {
        pid: false
    },
    timestamp: () => `, "time": "${dayjs().format()}"`
});

// finally export it
export default log;
import { Express, Request, Response } from 'express';

const router = function (app: Express){
    // here we're gonna create our routes 
    // a health check route
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    // a register endpoint
    // creating a new user 
    // POST /api/users

    // a login endpoint
    // creating a new session
    // POST /api/sessions

    // get the user's sessions endpoint
    // GET /api/sessions

    // logout endpoint
    // DELETE /api/sessions 
}

export default router;
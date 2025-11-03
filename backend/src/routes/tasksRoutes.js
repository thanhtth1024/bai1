import express from 'express';


const routes = express.Router();

routes.get("/", (request, response) => {
    response.send("Ban co 20 task can lam");
})


export default routes;
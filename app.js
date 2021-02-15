// const express = require('express'); //import express
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();  //play express



//MiddleWares
// app.use(helmet());
app.use(helmet({
    contentSecurityPolicy: false
}));
// app.use(
//     helmet.contentSecurityPolicy({
//         directives: {
//             defaultSrc: ["'self'", "http://*.fontawesome.com"],
//             scriptSrc: ["'self'", "http://*.fontawesome.com"],
//             styleSrc: ["'self'", "'unsafe-inline'"],
//             upgradeInsecureRequests: [],
//         },
//     })
// );
//ex) res.render("content") -> recognize as content.pug
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
app.set("view engine", "pug");
app.use(cookieParser());
//bodyParser is a middleware that checks the information that is delivered to the user's web
//check the body(form or json) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
//logging for everyting that happens
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);   //excute 'globalRouter' if you enter "/" path
app.use(routes.users, userRouter);   //excute 'userRouter' if you enter "/users" path
app.use(routes.videos, videoRouter);   //excute 'videoRouter' if you enter "/videos" path

export default app;
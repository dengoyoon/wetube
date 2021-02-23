import routes from "./routes";

//res.locals - local variable
//Useable in ALL TEMPLATE(pug file)
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next(); 
};
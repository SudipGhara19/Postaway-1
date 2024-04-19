import jwt from 'jsonwebtoken';
import HandleError from '../error-handler/handleError.js';

const jwtAuth = (req, res, next) => {

    // Reading the token
    const token = req.headers["authorization"];

    //if no token return Error
    if(!token){
        throw new HandleError(401, "Unauthorized");
    }

    //check if the token is valid or not
    try{
        const payload = jwt.verify(token, "v7U36Dfv7qSmPahZ45p5xT3kGAuddUwX");
        req.userId = payload.userId;
    }catch(err){
        throw new HandleError(401, "Unauthorized");
    }

    next();
}

export default jwtAuth;
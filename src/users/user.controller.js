
import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';
import HandleError from "../error-handler/handleError.js";


export default class UserController{

    signUp(req, res){
        const {name, email, password} = req.body;
        const user = UserModel.signUp(name, email, password);

        res.status(201).send(user)
    }

    signIn(req, res){
        const {email, password} = req.body;
        const user = UserModel.signIn(email, password);

        if(!user){
            throw new HandleError(400, "Invalid user credentials.");
        }else{
            // creating JWT token while signIn
            const token = jwt.sign(
                {userId: user.id, email: user.email}, 
                "v7U36Dfv7qSmPahZ45p5xT3kGAuddUwX", 
                {expiresIn: '7d'}
            );
                // returning JWT token if user exists
            return res.status(200).send(token);
        }
    }
}
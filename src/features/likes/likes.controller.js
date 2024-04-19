import LikesModel from "./likes.model.js";

export default class LikesController{

    // get likes by post id
    getLikes(req, res){
        const postId = req.params.id;
        const likes = LikesModel.getLikes(postId);
        res.status(200).send(likes);
    }
}
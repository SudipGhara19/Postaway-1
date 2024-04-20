import LikesModel from "./likes.model.js";

export default class LikesController{

    // get likes by post id
    getLikes(req, res){
        const postId = req.params.postId;
        const likes = LikesModel.getLikes(postId);
        res.status(200).send(likes);
    }

    // toggling Like on particular post
    toggleLike(req, res){
        const postId = req.params.postId;
        const userId = req.userId;

        const message = LikesModel.toggle(postId, userId);

        res.status(200).send(message);
    }
}
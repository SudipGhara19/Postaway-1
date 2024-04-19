import PostModel from "../posts/posts.model.js";
import HandleError from "../error-handler/handleError.js";

export default class CommentModel{
    constructor(userId, postId, content, id){
        this.userId = userId;
        this.postId = postId;
        this.content = content;
        this.id = id;
    }

    static getAll(postId){
        //check provided postId is valid or not
        const posts = PostModel.getAll();
        const post = posts.find((i) => i.id == postId);
        if(!post){
            throw new HandleError(404, "Post not found.")
        }
        // retrive comments on specific postId
        const postComments = comments.filter((i) => i.postId == postId);
        return postComments;
    }
}

let comments = [
    new CommentModel(3, 1, "Nice picture", 1),
    new CommentModel(2, 1, "incredible picture", 2),
]
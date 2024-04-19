import PostModel from "../posts/posts.model.js";
import HandleError from "../../error-handler/handleError.js";

export default class CommentModel{
    constructor(userId, postId, content, id){
        this.userId = userId;
        this.postId = postId;
        this.content = content;
        this.id = id;
    }

    // retrive comments for a specific post method
    static getAll(postId){
        //check provided postId is valid or not
        const posts = PostModel.getAll();
        const post = posts.find((i) => i.id == postId);
        if(!post){
            throw new HandleError(400, "Post not found.")
        }
        // retrive comments on specific postId
        const postComments = comments.filter((i) => i.postId == postId);
        return postComments;
    }


    // add a new comment method
    static add(postId, userId, content){
        //check provided postId is valid or not
        const posts = PostModel.getAll();
        const post = posts.find((i) => i.id == postId);
        if(!post){
            throw new HandleError(400, "Post not found.")
        }
        // creating new comment and push it to the comments array
        const newComment = new CommentModel(userId, postId, content);
        newComment.id = comments.length + 1;

        comments.push(newComment);

        return newComment;
    }

    //delete method
    static delete(id, userId){
        //checking comment id and userId
        const commentToDelete = comments.findIndex((i) => i.id == id && i.userId == userId);
        if(commentToDelete == -1){
            throw new HandleError(400, "Comment not found.")
        }else{
            comments.splice(commentToDelete, 1);
        }
    }

    // update method
    static update(id, userId, content){
        const commentToUpdate = comments.findIndex((i) => i.id == id && i.userId == userId);
        if(commentToUpdate == -1){
            throw new HandleError(400, "Invalid.");
        }
        comments[commentToUpdate].content = content;
        return comments[commentToUpdate];
    }
}

let comments = [
    new CommentModel(
        3,
        1,
        'Nice picture',
        1
        ),

    new CommentModel(
        2,
        1,
        'incredible picture',
        2),

    new CommentModel(
        1,
        1,
        'Wow!',
        3
    ),
]


export default class PostModel{
    constructor(userId, caption, imageUrl, id){
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.id = id;
    }
    // Get all the posts method
    static getAll(){
        return posts;
    }

    // get a post by id
    static getById(id){
        const post = posts.find((i) => i.id == id);
        return post;
    }

    // retrive posts based on userId/user credentials
    static getByUserCredentials(userId){
        const postsByUser = posts.filter((i) => i.userId == userId);
        return postsByUser;
    }

    // Add post method
    static add(userId, caption, imageUrl){
        const newPost = new PostModel(userId, caption, imageUrl);
        newPost.id = posts.length + 1;
        posts.push(newPost);

        return newPost;
    }

    // delete a post by :id
    static deletePost(postId, userId){
        //checking the post is posted by the loggedin user or not
        const postToDelete = posts.findIndex((i) => i.id == postId && i.userId == userId);
        
        if(postToDelete !== -1){
        const deletedPost = posts.splice(postToDelete, 1);
        return deletedPost;
        }
    }

    
    // Update a specific post by :id
    static updatePost(postId, userId, caption, imageUrl){
        const postToUpdate = posts.findIndex((i) => i.id == postId && i.userId == userId);
        if(postToUpdate !== -1){
            posts[postToUpdate] = {
                userId: userId,
                caption: caption,
                imageUrl: imageUrl,
                id: postId
            };
            return posts[postToUpdate];
        }
    }
};



let posts = [
    new PostModel(1,"I am thor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_J5jZSQmomL5ABLMdLQtNwaUb9rWvxzLWQ&s", 1),

    new PostModel(2, "i am ironMaN", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCL5GigVMxq6K2kBTck5zAx7KngK-VHbccw&s", 2),

    new PostModel (3, "I am Hulk", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRHVzLcjKinkqsmXxOZQsYt7gjJIpYTyMzw&s", 3),
]
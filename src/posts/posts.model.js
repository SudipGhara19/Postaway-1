

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

    // Add post method
    static add(userId, caption, imageUrl){
        const newPost = new PostModel(userId, caption, imageUrl);
        newPost.id = posts.length + 1;
        posts.push(newPost);

        return newPost;
    }
};

let posts = [
    new PostModel(1,"I am thor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_J5jZSQmomL5ABLMdLQtNwaUb9rWvxzLWQ&s", 1),

    new PostModel(2, "i am ironMaN", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCL5GigVMxq6K2kBTck5zAx7KngK-VHbccw&s", 2),

    new PostModel (3, "I am Hulk", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRHVzLcjKinkqsmXxOZQsYt7gjJIpYTyMzw&s", 3),
]
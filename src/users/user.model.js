export default class UserModel{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // signUp method
    static signUp(name, email, password){
        const newUser = new UserModel(name, email, password);
        newUser.id = users.length + 1;

        users.push(newUser);
        return newUser;
    }

    // signIn method
    static signIn(email, password){
        const user = users.find((u) => u.email == email && u.password == password);
        return user;
    }

    // get all users
    static getAllUsers(){
        return users;
    }
}

let users = [
    {
        id:1,
        name: 'thor',
        email: 'thor@gmail.com',
        password: 'password1'
    },
    {
        id:2,
        name: 'ironMan',
        email: 'ironMan@gmail.com',
        password: 'password1'
    },
    {
        id:3,
        name: 'hulk',
        email: 'hulk@gmail.com',
        password: 'password1'
    }
]
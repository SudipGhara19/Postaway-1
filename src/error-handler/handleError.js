
export default class HandleError extends Error{
    constructor(code, message){
        super(message);
        this.code = code
    }
};
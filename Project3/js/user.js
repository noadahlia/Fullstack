class user{
    constructor(_userName, _password, _email=null){
        this.userName = _userName;
        this.userPassword = _password;
        this.email = _email;
        this.userTasks = [];
    }
}
class task{
    constructor(_id, _text, _isDone, _date){
        this.taskId = _id;
        this.text = _text;
        this.isDone = _isDone;
        this.date = _date;
    }
}
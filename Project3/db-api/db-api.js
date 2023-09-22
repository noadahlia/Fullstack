class dbAPI{
    init = false;
    constructor(){
        // singelton
        if(!this.init){
            //define DB. In this case there is now DB to define becuase we used localStorage
            this.init = true;
        }
        return this;
    }
    addUser(newUser){
        if(localStorage.getItem(newUser.userName)!=null){
            //user is alredy exist
            console.log("user alredy exist");
            return false;
        }
        else{
            this.saveUser(newUser);
            console.log("add user to DB");
            return true;
        }
    }
    removeUser(user){
        if(localStorage.getItem(user.userID)==null){
            //user not found
            return false;
        }
    }
    removeTask(userTaskID, userName="currentUser"){
        var curentUser = this.getUser(userName);
        //var index =  curentUser.userTasks.indexOf(userTask);
        var indexToDelete = curentUser.userTasks.findIndex(item => item.taskId === userTaskID);
        if (indexToDelete > -1){
            console.log("index: ", indexToDelete);
            curentUser.userTasks.splice(indexToDelete, 1);
            this.saveUser(curentUser);
            return true;
        }
        else{
            return false;
        }
    }
    updateTask(task){
        var curentUser = this.getUser();
        if(curentUser != null){
            var success =  this.removeTask(task.taskId);
            if (success){
                this.addTaskToUser(task);
                return true;
            }
            return false;
        }
        return false;
           
    }
    getUser(userName="currentUser"){
        console.log(localStorage.getItem(userName));
        var curentUser = JSON.parse(localStorage.getItem(userName));
        console.log("db-api-get user:");
        console.log(curentUser);
        if (curentUser != null){
            return curentUser;
        }
        else{
            //user doesn't exist == null
            return curentUser;

        }
    }
    userLogout(){
        localStorage.setItem("currentUser","");
        var currentUser = localStorage.getItem("currentUser");
        console.log("db-api-get user:");
        if (currentUser == ""){          
            return true;
        }
        else{
            return false;
        }
        
    }
    addTaskToUser(task){
        var currentUser = this.getUser("currentUser");
        if(currentUser === null){
            //user not found;
            return false;
        }
        else{
            currentUser.userTasks.push(task);
            this.saveUser(currentUser);
            return true;
        }
    }
    saveUser(userToSave){
        localStorage[userToSave.userName] = JSON.stringify(userToSave);
        localStorage["currentUser"] = JSON.stringify(userToSave);
    }
}
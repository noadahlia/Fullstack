class Server {
    init = false;
    constructor(){
        if(!this.init){
            this.init = true;
            this.db = new dbAPI();
        }
        return this;
    }
    getRequest(request) {
        console.log("server.getRequest");
        console.log(request);
        var splitURL = request.url.split('/');
        var order = splitURL[1];
        var parameter;
        if (splitURL.length === 3){
            parameter = splitURL[2];
        }
        switch (request.method) {
            // respponsText = ?, status = ?
            case "GET":
                console.log("GET request");
                if(order === "get_current_user"){
                    console.log("get current user");
                    var user = this.db.getUser();
                    if(user!=null){
                        request.status = 200 //OK
                        request.responseText = user;
                    }
                    else{
                        request.status = 500 //Internal Server Error
                    }
                }
                if(order === "user_login"){
                    console.log("check user");
                    var user = this.db.getUser(request.data[0]);
                    console.log("user in db: ", user);
                    if(user != null){
                        if(user.userPassword == request.data[1]){
                            this.db.saveUser(user);
                            console.log("check password");
                            request.status = 200 //OK
                            request.responseText = user;
                        }
                        else{
                            request.status = 500 //Internal Server Error
                            request.responseText = "password error";
                        }                       
                    }
                    else{
                        request.status = 500 //Internal Server Error
                    }
                }
                
                break;
            case "POST":
                console.log("POST request")
                if(order==="add_new_user"){
                    console.log("add new user request")
                    var success = this.db.addUser(request.data);
                    console.log(success);
                    if (success === true){
                        request.status = 200 ; // OK

                    }
                    else{
                        request.status = 500 // Internal Server Error
                    }
                    break;
                }
                if (order === "add_new_task"){
                    console.log("add new task to user request")
                    var success = this.db.addTaskToUser(request.data);
                    if(success === true){
                        console.log("succses to add new task")
                        request.status = 200 //OK
                    }
                    else{
                        request.status = 500 // Internal Server Error
                    }
                    break;   
                }
                break;
            case "PUT":
                if(order === "update_task"){
                    console.log("update task");
                    var success = this.db.updateTask(request.data);
                    if(success === true){
                        console.log("succses to update task")
                        request.status = 200 //OK
                    }
                    else{
                       request.status = 500 // Internal Server Error
                    }
                    break;
                }
                if(order === "logout"){
                    console.log("user logout");
                    var success = this.db.userLogout();
                    if(success === true){
                        console.log("succses to logout")
                        request.status = 200 //OK
                    }
                    else{
                       request.status = 500 // Internal Server Error
                    }
                    break;
                }
                
                break;
            case "DELETE":
                if (order === "delete_task"){
                    console.log("delete task form user")
                    var success = this.db.removeTask(request.data);
                    if(success){
                        console.log("succses to delete task")
                        request.status = 200 //OK
                    }
                    else{
                        console.log("faild to delete task")
                       request.status = 500 // Internal Server Error
                    }
                    
                }
               
                break;      
        }
        console.log('server made response');
        Network.sendToClient(request);

    }


}
window.onload = function(){
    // declear viewEvents to elements
    // check if ther is current user connected
    request = new FXMLHttpRequest();
    request.open("GET", "server/get_current_user");
    request.onload = ()=>{
        console.log("login in onload()")
        if(request.status === 200){
            // found current user
            var currentUser = request.responseText;
            showMainWindow();
        }
        else{
            // need to log in
            showLogIn();
        }
    }
    request.send();
}

function showSingIn(){
    var singInElement = document.querySelector("#signInTemplate").content;
    document.body.appendChild(singInElement.cloneNode(true));
    declearViewEventeSignIn();
}

function showLogIn(){
    var logInElement = document.querySelector("#logInTemplate").content;
    document.body.appendChild(logInElement.cloneNode(true));
    declearViewEventeLogIn();
}

function declearViewEventeNav(){
    var homeLink = document.querySelector("#Home");
    homeLink.addEventListener("click", ()=>{
        mainText = document.querySelector(".intro-area");
        var temp = document.getElementById("main");
        var templateExists = mainText.querySelector(".container-intro");
        if(!templateExists){
            var clon = temp.content.cloneNode(true);
            mainText.appendChild(clon);
        }  
        // if user's card exist - remove
        removeAllUserTask();
        // remove add-task form
        var formChild = document.getElementById("addTaskForm");
        console.log(formChild);
        formChild.parentNode.removeChild(formChild);

    });

    var toDoLink = document.querySelector("#toDo");
    toDoLink.addEventListener("click", ()=>{
        var mainText = document.querySelector(".intro-area");
        var templateExists = mainText.querySelector(".container-intro");
        if(templateExists){
            mainText.removeChild(templateExists);
        } 
        declearBtnAddTask();
        showAllUserTasks();
    });

    var logout=document.querySelector("#logout");
    logout.addEventListener("click", ()=>{
        request = new FXMLHttpRequest();
        request.open("PUT", "server/logout");
        request.onload = ()=>{
            // get the div element by its ID
            var mainWindow = document.querySelector(".header-area");
            console.log(mainWindow);
            // loop through all child elements of the div and remove them
            while (mainWindow.firstChild) {
                console.log(mainWindow.firstChild);
                mainWindow.removeChild(mainWindow.firstChild);
            }
            // remove the div element itself
            mainWindow.parentNode.removeChild(mainWindow);
            showLogIn(); 
        }
        request.send();
    });   
}

function addTaskCard(task){
    console.log("in function addTaskCard");
    console.log(task.taskId);
    var cardsContainer = document.querySelector(".row-cards");
    var card = document.getElementById("task-card").content;
    var textElement = card.querySelector(".widget-49-pro-title");
    textElement.innerHTML = task.text;
    card.querySelector(".col-lg-4").setAttribute("id", task.taskId);
    var clon = card.cloneNode(true);
    cardsContainer.appendChild(clon);

    var currentCard = document.querySelector('[id="' + task.taskId + '"]');
    textElement = currentCard.querySelector(".widget-49-pro-title");
    
    if (textElement.querySelector(".card-done")){
        if(task.isDone === false){
            textElement.classList.remove("card-done");
            console.log("remove card-done");
        }
    }
    else{
        if(task.isDone === true){
            textElement.classList.add("card-done");
            console.log("add card-done");
        }
        
    }
    //add date to card
    var dayOfMonth = task.date[0];
    console.log(dayOfMonth);
    var monthName = task.date[1];
    console.log(monthName);
    // update HTML elements
    currentCard.querySelector(".widget-49-date-day").innerHTML = dayOfMonth;
    currentCard.querySelector(".widget-49-date-month").innerHTML = monthName;

    //add eventListener to addTaskBtn
    var btnTaskDone = currentCard.querySelector(".btn-delete");
    btnTaskDone.addEventListener("click", (event)=>{
       request = new FXMLHttpRequest();
       request.open("DELETE", "server/delete_task");
       request.onload = ()=>{
            currentCard.parentNode.removeChild(currentCard);
       }
       request.send(task.taskId);
    });

    var checkbox = currentCard.querySelector("#checkboxInput");
    if(task.isDone === true){
        checkbox.checked = true;
    }
    else{
        checkbox.checked = false;
    }
    // add checkbox event
    checkbox.addEventListener('change', function() {
        console.log("check function");
        var id = task.taskId;
        console.log("check id", id);
        if (this.checked) {
            // Checkbox is checked
            console.log('Checkbox is checked');
            //update server
            request = new FXMLHttpRequest();
            request.open("PUT","server/update_task");
            request.onload = ()=>{
                var cardDone = document.querySelector('[id="' + id + '"]');
                var textElement = cardDone.querySelector(".widget-49-pro-title");
                textElement.classList.add("card-done");
            }
            task.isDone = true;
            request.send(task);
        } else {
            // Checkbox is not checked
            console.log('Checkbox is not checked');
             //update server
             request = new FXMLHttpRequest();
             request.open("PUT","server/update_task");
             request.onload = ()=>{
                 var cardDone = document.querySelector('[id="' + id + '"]');
                 var textElement = cardDone.querySelector(".widget-49-pro-title");
                 textElement.classList.remove("card-done");
             }
             task.isDone = false;
             request.send(task);
        }
    });

    currentCard.addEventListener("dblclick", ()=>{
        console.log("card clicked");
        textElement = currentCard.querySelector(".widget-49-pro-title");
        textElement.contentEditable = true;
        textElement.focus();
        // Add blur event listener
        textElement.addEventListener('blur', function() {
            textElement.contentEditable = false;
            // update task and server
            var editedText = textElement.innerText;
            task.text = editedText;
            request =  new FXMLHttpRequest();
            request.open("PUT", "server/update_task");
            request.onload = ()=>{

            }
            request.send(task);

        });
    })
}

function declearBtnAddTask(){
    var divHeader = document.querySelector(".header-area");
    var formChild = document.getElementById("AddTaskForm");
    divHeader.appendChild(formChild.content.cloneNode(true));
    var addBtn = document.querySelector("#add-button");
    // add eventListenet after adding form element
    addBtn.addEventListener("click", ()=>{
        console.log("add Task");
        // post request to server
        var taskText = document.getElementById("task-input").value;
        var id = generatID();
        // define date
        var currentDate = new Date();
        var dayOfMonth = currentDate.getDate();
        var monthName = currentDate.toLocaleString('en-US', { month: 'long' });
        // create new task
        newTask = new task(id, taskText, false, [dayOfMonth, monthName]);
        request = new FXMLHttpRequest();
        request.open("POST", "server/add_new_task");
        request.onload = ()=>{
            // Using a closure to access the `id` parameter
            console.log( "random id: ", id);
            addTaskCard(newTask);
            //delete texg task from the form
            document.getElementById("task-input").value = "";
        }
        console.log("send request to add task");
        request.send(newTask);
    });
}

function showAllUserTasks(){
    // first, remove all the existing cards
    removeAllUserTask();
    console.log("try to show all user tasks");
    var request = new FXMLHttpRequest();
    request.open("GET", "server/get_current_user");
    request.onload = ()=>{
        userCards = request.responseText.userTasks;
        console.log( "usercards: ", userCards);
        if(userCards){
            userCards.forEach(function(card){
                addTaskCard(card);
                console.log("user-task: ", card.taskId);
                console.log("Done: ", card.isDone);
            });
        }
        console.log("finish show crads");
    }
    request.send();
}

function removeAllUserTask(){
     var cards = document.querySelectorAll(".col-lg-4");
     cards.forEach(function(card){
         card.parentNode.removeChild(card);
     });
}

function declearViewEventeSignIn(){
    var signIn = document.querySelector("#signInBtn");

    signIn.addEventListener("click", function(){
        console.log("singIn click");
        // get signInContainer
        var signInTemplate = document.querySelector(".container-signIn");

        var username = signInTemplate.querySelector("#username").value;
        var userPassword = signInTemplate.querySelector("#password").value;
        var userEmail = signInTemplate.querySelector("#email").value;

        // need to do a GET request to server and check if user exist
        var newUser = new user(username, userPassword, userEmail);
        var request = new FXMLHttpRequest();
        request.open('POST', 'server/add_new_user');
        request.onload = ()=>{
            console.log(request);
            showMainWindow();
             
        }
        request.send(newUser);  
    })
}

function declearViewEventeLogIn(){
    var logIn = document.querySelector("#logInBtn");

    logIn.addEventListener("click", function(){
        console.log("logIn click");
        var logInTemplate = document.querySelector(".container-logIn");

        var username = logInTemplate.querySelector("#username").value;
        var userPassword = logInTemplate.querySelector("#password").value;
        // need to do a GET request to server and check if user exist
        var input_user = new Array(username, userPassword);
        var request = new FXMLHttpRequest();
        request.open('GET', 'server/user_login');
        request.onload = ()=>{
            console.log(request);
            // check if there is elements that need to removed
            if(request.status>=200 && request.status<=400){
                showMainWindow(); 
            }
            else if(request.status==500){
                document.querySelector("#login_error").classList.remove("hide");
            }
        }
        request.send(input_user);
    });

    var creatAccountBtn = document.getElementById("registerLnk");
    creatAccountBtn.addEventListener("click", ()=>{
        console.log("register btn clicled");
        var logInElement = document.querySelector(".container-logIn");
        // in case that sign in show first
        if(logInElement){
            logInElement.parentNode.removeChild(logInElement);
        }
        showSingIn();
    
    });
}

function showMainWindow(){

    var singInElement = document.querySelector(".container-signIn");
    // in case that sign in show first
    if(singInElement){
        singInElement.parentNode.removeChild(singInElement);
    }

    var logInElement = document.querySelector(".container-logIn");
    // in case that sign in show first
    if(logInElement){
        logInElement.parentNode.removeChild(logInElement);
    }

    var mainWindow = document.querySelector("#mainWindow").content.cloneNode(true);
    document.body.appendChild(mainWindow);
    mainText = document.querySelector(".intro-area");
    var temp = document.getElementById("main");
    var templateExists = mainText.querySelector(".container-intro");
    console.log(templateExists);
    if(!templateExists){
        var clon = temp.content.cloneNode(true);
        mainText.appendChild(clon);
    }  
    declearViewEventeNav();

}
function generatID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

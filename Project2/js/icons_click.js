function logout(){
    localStorage.removeItem("user");
    window.location.href = "./log.html";
}

function home(){
    window.location.href = "./home.html";
}
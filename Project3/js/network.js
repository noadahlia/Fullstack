class Network{
    static sendToServer(request){
        console.log("network.send");
        var address = request.url.split('/')[0];
        if(address=="server"){
            //define server, server is singelton
            console.log("open server");
            var server = new Server();
            console.log("try to send data from network to server");
            server.getRequest(request);
        }
    }
    static sendToClient(request){
        request.readyState = ReadyState.DONE;
        console.log("send to client");

    }
}
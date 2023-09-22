//etat de la connexion
const ReadyState = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
}

class FXMLHttpRequest{

    open(method, url){
        this.method = method;
        this.url = url;
        this._readyState = ReadyState.OPENED;
        this.async=true;
        this.data = null;
        this.responseText = "";
        this.status = 0; // 200 OK, 404 Not Found, 403 Forbidden, 500 Internal Server Error
        this._onload = null;
        this.async= true;
        console.log("open request");
    }

    send(_data=null){ 
        if(_data!=null){
            // POST request
            this.data = _data;
        }
        console.log("send request");
        Network.sendToServer(this);
    }

    get onload(){
        return this._onload;
    }
    set onload(value){
        this._onload = value
    }
    get readyState(){
        return this._readyState;
    }
    set readyState(value){
        this._readyState = value;
        console.log("readyState change");
        if(this._readyState === ReadyState.DONE ){
            // response is done
            this.onload();
        }
    }
  

}

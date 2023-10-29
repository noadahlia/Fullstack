import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function Logout({ setUser }){
    const navigate = useNavigate() 
    useEffect(() => {
        setTimeout( () => navigate('/Login'), 1000)} , []) //la on a rien donc useEffect s active que qd on arv sur logout
                                                            //par contre la fonction peut s activer a chq fois que les param entres dans [] changent
        window.localStorage.clear()
        setUser(null)
    return(
        <div  className="content">
            Logout...
        </div>

    )
}

export default Logout;
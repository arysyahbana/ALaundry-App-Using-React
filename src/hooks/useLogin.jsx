import { useEffect, useState } from "react"
import { getId } from "../services/auth.service";

export const  useLogin = () => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setUsername(getId(token))
            // console.log(getUsername(token))
        }
        else{
            console.log("walaweee")
            // window.location.href = '/login'
        }
    }, []);

    return username
}
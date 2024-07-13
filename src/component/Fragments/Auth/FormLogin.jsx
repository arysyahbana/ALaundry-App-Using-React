import { useEffect, useRef, useState } from "react";
import InputForm from "../../Elements/Input";
import Button from "../../Elements/Button";
import { login } from "../../../services/auth.service";
import { Link } from "react-router-dom";

const FormLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const data = {
            email : event.target.email.value,
            password: event.target.password.value,
        }

        login(data, (status,res) => {
            if(status){
                localStorage.setItem("token", res);
                sessionStorage.setItem("loginSuccess", "true");
                window.location.href = '/'
                // console.log(res);
            }else {
                // setLoginFailed(res.response.data);
                console.log(res.response.data)
            }
        })
    }
    const emailRef = useRef(null);
    useEffect(() =>
        emailRef.current.focus()
    )

    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Email" name="email" type="email" placeholder="johnD@gmail.com" ref={emailRef}/>
            <InputForm label="Password" name="password" type="password" placeholder="********" />
            <Link to="/forget/password" className="text-sky-500 hover:text-sky-700 ms-2">Forget Password?</Link>
            <div className="text-end">
                {isLoading ? 
                    <Button type="submit" className="bg-sky-500 text-white rounded-xl hover:bg-sky-600 px-5 py-2 shadow">
                        <div className="flex gap-2">
                            <img src="/public/images/loading2.gif" alt="" className="h-4 mt-1" />
                            <span>Logging in...</span>
                        </div>
                    </Button> : 
                    <Button type="submit" className="bg-sky-500 text-white rounded-xl hover:bg-sky-600 px-5 py-2 shadow">Login</Button>
                }                
            </div>
        </form>
    )
}

export default FormLogin
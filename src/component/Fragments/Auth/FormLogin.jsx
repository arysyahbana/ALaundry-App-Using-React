import { useEffect, useRef } from "react";
import InputForm from "../../Elements/Input";
import Button from "../../Elements/Button";
import { login } from "../../../services/auth.service";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();

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

            <div className="text-end">
                <Button type="submit" className="bg-sky-500 text-white rounded-xl hover:bg-sky-600 px-5 py-2 shadow">Login</Button>
            </div>
        </form>
    )
}

export default FormLogin
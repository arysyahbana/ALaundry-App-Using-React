import { useEffect, useRef } from "react";
import Button from "../../Elements/Button"
import InputForm from "../../Elements/Input"
import { forgetPassword } from "../../../services/auth.service";

const FormForgetPassword = () => {
    const handleForget = (event) =>{
        event.preventDefault();

        const data = {
            email : event.target.email.value
        }

        forgetPassword(data, (status, res) => {
            if(status){
                console.log(status)
            } else {
                console.log(res)
            }
        })
    }
    const emailRef = useRef(null);
    useEffect(() =>
        emailRef.current.focus()
    )
    return (
        <form onSubmit={handleForget}>
            <InputForm label="Email" name="email" type="email" placeholder="johnD@gmail.com" ref={emailRef}/>
            <div className="text-center">
                <Button type="submit" className="bg-green-500 text-white rounded-xl hover:bg-green-600 px-5 py-2 shadow">Send Link Reset Password</Button>
            </div>
        </form>
    )
}
export default FormForgetPassword
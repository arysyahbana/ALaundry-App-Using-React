import { useEffect, useRef } from "react";
import Button from "../../Elements/Button"
import InputForm from "../../Elements/Input"
import { useParams } from "react-router-dom";
import { submitForget } from "../../../services/auth.service";

const FormSubmitForget = () => {
    const {token} = useParams();
    const passRef = useRef(null);

    useEffect(() =>
        passRef.current.focus()
    )

    const handleSubmitPassword = (event) => {
        event.preventDefault();

        const data = {
            password: event
        };

        submitForget(token, data). then((res) => {
            console.log("Password berhasil di reset", res);
        })
        .catch((err) => {
            console.log("Gagal reset password", err)
        })
    }
    return (
        <form onSubmit={handleSubmitPassword}>
            <InputForm label="Password" name="password" type="password" placeholder="********" ref={passRef} />
            <div className="text-center">
                <Button type="submit" className="bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 px-5 py-2 shadow">Send Link Reset Password</Button>
            </div>
        </form>
    )
}
export default FormSubmitForget
import { useEffect } from "react"
import FormLogin from "../component/Fragments/Auth/FormLogin"
import AuthLayout from "../component/Layouts/AuthLayout"
import toast from "react-hot-toast"

const LoginPage = () => {
    // TOAST BERHASIL REGISTER
    useEffect(() => {
        if (sessionStorage.getItem("registerSuccess") === "true") {
            toast.success("Create Account Successfully");
            sessionStorage.removeItem("registerSuccess");
        }
    }, [])
    return (
        <AuthLayout title="Login" textColor="text-sky-500" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage
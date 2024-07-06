import FormLogin from "../component/Fragments/Auth/FormLogin"
import AuthLayout from "../component/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout title="Login" textColor="text-sky-500" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage
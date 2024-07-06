import FormRegister from "../component/Fragments/Auth/FormRegister"
import AuthLayout from "../component/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" textColor="text-yellow-400" type="register">
            <FormRegister />
        </AuthLayout>
    )
}
export default RegisterPage
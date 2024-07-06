import FormForgetPassword from "../component/Fragments/Auth/FormForgetPassword"
import AuthLayout from "../component/Layouts/AuthLayout"

const ForgetPasswordPage = () => {
    return (
        <AuthLayout title="Forgot Password" textColor="text-green-500" type="forget">
            <FormForgetPassword />
        </AuthLayout>
    )
}
export default ForgetPasswordPage
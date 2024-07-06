import FormSubmitForget from "../component/Fragments/Auth/FormSubmitForget"
import AuthLayout from "../component/Layouts/AuthLayout"

const SubmitForgetPage = () => {
    return (
        <AuthLayout title="Submit Password" textColor="text-indigo-500" type="submitPass">
            <FormSubmitForget />
        </AuthLayout>
    )
}

export default SubmitForgetPage
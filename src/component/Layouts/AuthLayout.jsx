import { Link } from "react-router-dom";
import FormLogin from "../Fragments/Auth/FormLogin"

const AuthLayout = (props) => {
    const {children, textColor, title, type} = props;
    return(
        <div className={`bg-gray-400 w-full min-h-screen flex flex-wrap justify-center items-center gap-10`}>
            <img src="/public/images/login.svg" alt="" className="order-2 lg:order-1 mb-96 lg:mb-0"/>
            <div className="absolute lg:relative bg-white rounded-xl lg:w-[25%] p-5 shadow-lg shadow-xl order-1 lg:order-2">
                <div className="flex justify-between mb-5">
                    <span className={`font-semibold ${textColor} text-xl pt-2`}>{title} To App</span>
                    <img src="/public/images/logoBiru.svg" alt="" className="h-12"/>
                </div>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    )
};

const Navigation = ({type}) => {
    if (type === 'login'){
        return (
            <>
                <p className="mt-8 mb-5 text-center text-gray-500">
                    Don't have an account?
                    <Link to="/register" className="text-yellow-500 hover:text-yellow-700 ms-2">Register</Link>  
                </p>
            </>
        );
    } else if (type === 'register') {
        return (
            <p className="mt-8 mb-5 text-center text-gray-500">
                Already have an account?
                <Link to="/login" className="text-sky-500 hover:text-sky-700 ms-2">Login</Link>
            </p>
        );
    } else {
        return null
    }
}
export default AuthLayout
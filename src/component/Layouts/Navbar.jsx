import { useContext, useEffect, useRef, useState } from "react"
import Button from "../Elements/Button"
import { Link } from "react-router-dom"
// import { useLogin } from "../../hooks/useLogin"
import toast from "react-hot-toast"
import { useLogout } from "../../hooks/useLogout"
import { getId } from "../../services/auth.service"
import { fetchUserData } from "../../services/auth.service"
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { DarkMode } from "../../context/DarkMode"

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const logout = useLogout();
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem("token");
    const navbarRef = useRef();
    const userId = token ? getId(token) : null;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    
    // TOAST LOGIN SUCCESS
    useEffect(() => {
        if (sessionStorage.getItem("loginSuccess") === "true") {
            toast.success("Login Success");
            sessionStorage.removeItem("loginSuccess");
        }
    }, []);

    // LOGOUT
    const handleLogout = async () => {
        try {
            await logout();
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
            toast.success("Logout success");
        } catch (error) {
            toast.error("Logout failed");
        }
    };

    // SCROLL NAV
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [] )
    
    // BURGER CLICK
    const handleBurgerClick = () => {
        setIsNavbarVisible(!isNavbarVisible);
    }

    // GET DATA USER
   useEffect(() => {
        const getUserData = async () => {
            try {
                if (!token) {
                    console.error("Token tidak ditemukan");
                    return;
                }

                const userId = getId(token);
                console.log("User ID:", userId);

                if (!userId) {
                    console.error("User ID tidak ditemukan");
                    return;
                }

                const data = await fetchUserData(userId, token);
                console.log("User Data:", data);
                setUserData(data);
                
            } catch (error) {
                console.error("Gagal mengambil data user:", error);
                toast.error("Gagal mengambil data user");
            }
        };

        if (token) {
            getUserData();
        }
    }, [token]);

    return (
         <>
            <nav className={`navbar flex flex-wrap md:flex-row justify-between py-5 px-10 top-0 fixed w-full z-30 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <img src={isScrolled ? "public/images/logoBiru.svg" : "public/images/logo.svg"} alt="" className="h-12"/>
                <div className="flex justify-center gap-10 font-semibold text-lg mt-3">
                    <a href="#Home" className={` text-[#373A40] hidden lg:block hover:${isScrolled ? 'text-yellow-400' : 'text-white'}`}>Home</a>
                    <a href="#About" className={` text-[#373A40] hidden lg:block hover:${isScrolled ? 'text-yellow-400' : 'text-white'}`}>About</a>
                    <a href="#Service" className={` text-[#373A40] hidden lg:block hover:${isScrolled ? 'text-yellow-400' : 'text-white'}`}>Services</a>
                    <a href="#Price" className={` text-[#373A40] hidden lg:block hover:${isScrolled ? 'text-yellow-400' : 'text-white'}`}>Price</a>
                </div>
                <div className="hidden lg:block">
                    {userData ? (
                        <>
                            <span className={`me-3 text-lg font-bold ${isScrolled ? 'text-[#373A40]' : 'text-white'}`}>Hi, {userData.data.name}</span>
                            <Button className="bg-indigo-400 px-6 py-2 font-semibold text-white shadow-lg rounded-lg hover:bg-indigo-600" onClick={handleLogout}> Logout </Button>
                        </>
                    ):(
                        <Link to="/login">
                            <Button className="bg-yellow-400 px-6 py-2 font-semibold text-white shadow-lg rounded-lg hover:bg-yellow-600"> Login </Button>
                        </Link>
                    )}
                    <Button className={`bg-sky-500 p-3 text-white rounded-lg hover:bg-sky-600 ms-1`} onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <IoMdMoon /> : <FaSun />}
                    </Button>
                    <Link to={`/profile/${userId}`}>
                        <Button className={`bg-green-500 px-8 py-2 text-white rounded-lg hover:bg-green-600 ms-1`}>Profile</Button>
                    </Link>
                </div>
                <button className="lg:hidden" onClick={handleBurgerClick}>
                    <img src="/images/burger.svg" alt="" className={`h-8 ${isScrolled ? 'hidden' : 'block'}`}/>
                    <img src="/images/burger-black.svg" alt="" className={`h-8 ${isScrolled ? 'block' : 'hidden'}`} />
                </button>
            </nav>

            {isNavbarVisible && (
                <div ref={navbarRef} className="fixed inset-0 h-72 top-[6%] bg-white border-2 w-full text-center flex flex-col p-5 rounded-xl z-20 transition-opacity duration-500 ease-in-out mt-10 shadow-xl lg:hidden">
                    <div className="flex flex-col justify-center gap-4 text-sm mt-3">
                        {userData ? (
                        <>
                            <span className={`me-3 text-lg font-bold text-[#373A40]`}>Hi, {userData.data.name}</span>
                            <a href="#Home" className=" text-[#373A40] hover:text-yellow-400">Home</a>
                            <a href="#About" className=" text-[#373A40] hover:text-yellow-400">About</a>
                            <a href="#Service" className=" text-[#373A40] hover:text-yellow-400">Services</a>
                            <a href="#Price" className=" text-[#373A40] hover:text-yellow-400">Price</a>
                            <div className="flex justify-center">
                                <Button className="bg-indigo-400 px-6 py-2 font-semibold text-white shadow-lg rounded-lg hover:bg-indigo-600" onClick={handleLogout}> Logout </Button>
                                <Button className={`bg-sky-500 p-3 text-white rounded-lg hover:bg-sky-600 ms-1`} onClick={() => setIsDarkMode(!isDarkMode)}>
                                    {isDarkMode ? <IoMdMoon /> : <FaSun />}
                                </Button>
                            </div>
                        </>
                            ):(
                                <>
                                <a href="#Home" className=" text-[#373A40] hover:text-yellow-400">Home</a>
                                <a href="#About" className=" text-[#373A40] hover:text-yellow-400">About</a>
                                <a href="#Service" className=" text-[#373A40] hover:text-yellow-400">Services</a>
                                <a href="#Price" className=" text-[#373A40] hover:text-yellow-400">Price</a>
                                <div className="flex justify-center">
                                    <Link to="/login">
                                        <Button className="bg-yellow-400 px-6 py-2 font-semibold text-white shadow-lg rounded-lg hover:bg-yellow-600"> Login </Button>
                                    </Link>
                                    <Button className={`bg-sky-500 p-3 text-white rounded-lg hover:bg-sky-600 ms-1`} onClick={() => setIsDarkMode(!isDarkMode)}>
                                        {isDarkMode ? <IoMdMoon /> : <FaSun />}
                                    </Button>
                                </div>
                                </>
                            )}
                    </div>
                </div>
            )}
         </>
    )
}

export default Navbar
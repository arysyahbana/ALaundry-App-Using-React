import { useState } from "react"
import Button from "../Elements/Button"

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false)
    const handleBurgerClick = () => {
        setIsNavbarVisible(!isNavbarVisible)
    }
    return (
         <>
            <nav className="navbar flex flex-wrap md:flex-row justify-between pt-10 px-10 top-0 fixed top-0 w-full z-30 md:bg-transparent">
                <img src="public/images/logo.svg" alt="" className="h-12"/>
                <div className="flex justify-center gap-10 font-semibold text-lg mt-3">
                    <a href="#Home" className=" text-[#373A40] hover:text-white hidden lg:block">Home</a>
                    <a href="#About" className=" text-[#373A40] hover:text-white hidden lg:block">About</a>
                    <a href="#Service" className=" text-[#373A40] hover:text-white hidden lg:block">Services</a>
                    <a href="#Price" className=" text-[#373A40] hover:text-white hidden lg:block">Price</a>
                </div>
                <div className="hidden lg:block">
                    <Button className="bg-yellow-400 text-white rounded-b-2xl rounded-tl-2xl shadow-lg hover:bg-yellow-600"> Login </Button>
                    <Button className="bg-sky-400 px-8 py-2 text-white rounded-b-2xl rounded-tr-2xl shadow-lg hover:bg-sky-600 ms-1">Dark</Button>
                </div>
                <button className="lg:hidden" onClick={handleBurgerClick}>
                    <img src="/images/burger.svg" alt="" className="h-8"/>
                </button>
            </nav>

                {isNavbarVisible && (
                    <div className="absolute left-[31%] bg-white w-[40%] text-center flex flex-col p-5 rounded-xl z-10 transition-opacity duration-500 ease-in-out">
                        <div className="flex flex-col justify-center gap-4 text-sm mt-3">
                            <a href="#Home" className=" text-[#373A40] hover:text-yellow-400">Home</a>
                            <a href="#About" className=" text-[#373A40] hover:text-yellow-400">About</a>
                            <a href="#Service" className=" text-[#373A40] hover:text-yellow-400">Services</a>
                            <a href="#Price" className=" text-[#373A40] hover:text-yellow-400">Price</a>
                        </div>
                    </div>
                )}
         </>
    )
}

export default Navbar
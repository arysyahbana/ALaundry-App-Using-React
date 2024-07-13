import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const CardHome = (props) => {
    const {isDarkMode} = useContext(DarkMode)
    const {title, image, fill, className, fillColor = "text-green-400"} = props
    return (
        <div className={`shadow-lg px-16 py-5 rounded-xl text-center ${className} ${isDarkMode ? "bg-slate-500" : "bg-white"}`}>
            <p className={`font-bold text-sky-500 ${isDarkMode && "text-white"}`}>{title}</p>
            <img src={image} alt="" className="h-24"/>
            <p className={`font-black text-5xl ${fillColor}`}>{fill}</p>
        </div>
    );
};

export default CardHome


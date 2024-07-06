
const CardHome = (props) => {
    const {title, image, fill, className, fillColor = "text-green-400"} = props
    return (
        <div className={`bg-white shadow-lg px-16 py-5 rounded-xl text-center ${className}`}>
            <p className="font-bold text-sky-500">{title}</p>
            <img src={image} alt="" className="h-24"/>
            <p className={`font-black text-5xl ${fillColor}`}>{fill}</p>
        </div>
    );
};

export default CardHome


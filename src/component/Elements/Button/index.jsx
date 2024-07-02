const Button = (props) => {
    const {children = "..........", className = "bg-sky-500 text-white rounded-xl", onClick = () => {}, type = "button" } = props
    return(
        <button className={`font-semibold py-2 px-4 ${className}`} onClick={onClick} type={type}>{children}</button>
    )
}
export default Button
// import PropTypes from "prop-types";

const Button = (props) => {
    const {children = "..........", className = "bg-sky-500 text-white rounded-xl hover:bg-sky-600", onClick = () => {}, type = "button" } = props
    return(
        <button className={`font-semibold ${className}`} onClick={onClick} type={type}>{children}</button>
    )
}

// Button.propTypes = {
//     className: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     children: PropTypes.string.isRequired,
//     onClick: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
// };

export default Button
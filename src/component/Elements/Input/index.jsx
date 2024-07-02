const InputForm = () => {
    return(
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} />
        </div>
    )
}

const Label = (props) => {
    const {htmlFor, children} = props
    return (
        <label htmlFor={htmlFor} className="block text-slate-600 text-sm font-bold mb-2">{children}</label>
    )
}

const Input = (props) => {
    const {type, name, placeholder}
    return (
        <input type={type} name={name} id={name} className="text-sm border rounded w-full text-slate-800 py-3 px-2 placeholder: opacity-50" placeholder={placeholder} ref={ref}/>  
    )
}
export default InputForm
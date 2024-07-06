// import { useEffect, useRef, useState } from "react";
// import Button from "../../Elements/Button"
// import InputForm from "../../Elements/Input"
// import { register } from "../../../services/auth.service";

// const FormRegister = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password:'',
//     })

//     const nameRef = useRef(null);
//     useEffect(() =>
//         nameRef.current.focus()
//     )

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//             ['role']: 'user'
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         register(formData, (success, data) => {
//             if(success){
//                 console.log("Registration Successfull", data);
//             }else {
//                 console.error("Registration failed", data);
//             }
//         } )
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <InputForm label="name" name="name" type="name" placeholder="John D" ref={nameRef} onChange={handleChange}/>
//             <InputForm label="email" name="email" type="email" placeholder="johnD@gmail.com" onChange={handleChange} />
//             <InputForm label="password" name="password" type="password" placeholder="********" onChange={handleChange} />

//             <div className="text-end">
//                 <Button type="submit">Register</Button>
//             </div>
//         </form>
//     )
// }
// export default FormRegister

import { useEffect, useRef, useState } from "react";
import Button from "../../Elements/Button";
import InputForm from "../../Elements/Input";
import { register } from "../../../services/auth.service";

const FormRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = { ...formData, role: 'user' };
        // console.log("Form Data:", dataToSubmit);
        register(dataToSubmit, (success, data) => {
            if (success) {
                console.log("Registration successful", data);
            } else {
                console.error("Registration failed", data);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm
                label="name"
                name="name"
                type="text"
                placeholder="John D"
                value={formData.fullName}
                onChange={handleChange}
                ref={nameRef}
            />
            <InputForm
                label="email"
                name="email"
                type="email"
                placeholder="johnD@gmail.com"
                value={formData.email}
                onChange={handleChange}
            />
            <InputForm
                label="password"
                name="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
            />
            <div className="text-end">
                <Button type="submit" className="bg-yellow-400 text-white rounded-xl hover:bg-yellow-600 px-5 py-2 shadow">Register</Button>
            </div>
        </form>
    );
};

export default FormRegister;

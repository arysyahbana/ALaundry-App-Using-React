import axios from "axios";
import { jwtDecode } from "jwt-decode";


// LOGIN
export const login = (data, callback) => {
    axios.post("https://express-laundry.vercel.app/auth/login", data).then((res) => {
        // console.log(res.data);
        callback(true, res.data.token)
    })
    .catch((err) => {
        // console.log(err)
        callback(false, err)
    })
}

// REGISTER
export const register = (data, callback) => {
    axios.post("https://express-laundry.vercel.app/auth/register", data).then((res) => {
        callback(true,  res.data);
    })
    .catch((err) => {
        callback(false, err.response ? err.response.data : err.message);
    })
}

// FORGET PASSWORD
export const forgetPassword = (data) => {
    axios.post("https://express-laundry.vercel.app/auth/forget-password", data).then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err.response.data)
    })
}

// SUBMIT FORGET PASSWORD
export const submitForget = (data) => {
    axios.post("https://express-laundry.vercel.app/auth/forget-password/{token}", data).then((res) => {
        console.log("Password berhasil di reset", res.data)
    })
    .catch((err) => {
        console.log("Gagal reset password", err.response.data)
    })
}

// GET USER DATA
export const getId = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded)
    return decoded.userId
}

export const fetchUserData = async (userId, token) => {
    const res = await axios.get(`https://express-laundry.vercel.app/user/edit/${userId}`, {
         headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}



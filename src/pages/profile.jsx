import { useEffect, useState } from "react";
import InputForm from "../component/Elements/Input"
import Button from "../component/Elements/Button";
import { fetchUserData, getId, updateUser } from "../services/auth.service";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const token = localStorage.getItem("token");
    const [userData, setUserData] = useState(null);
    
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

    // UPDATE DATA USER
    const handleChange = (e) => {
        setUserData({
            ...userData,
            data: {
                ...userData.data,
                [e.target.name] : e.target.value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userId = getId(token);
            await updateUser(userData, userId, token);
            toast.success("Data Berhasil Di Update")
        } catch {
            console.log("Gagal Mengupdate Data");
            toast.error("Gagal Mengupdate Data")
        }   
    }

    if (!userData) {
        return (
            <div className="bg-slate-200 h-screen w-full flex justify-center items-center">
                <div className="bg-white w-1/2 p-5 rounded-xl">
                    <p className="font-bold text-slate-500 text-2xl mb-5">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-200 h-screen w-full flex justify-center items-center">
            <div className="bg-white w-1/2 p-5 rounded-xl">
                {userData && (
                    <>
                        <p className="font-bold text-slate-500 text-2xl mb-5">Profile <span className="text-sky-500">{userData.data.name}</span></p>
                        <form onSubmit={handleSubmit}>
                            <InputForm label="Nama" name="name" type="text" placeholder="Budi Santoso" value={userData.data.name} onChange={handleChange}/>
                            <InputForm label="Email" name="email" type="email" placeholder="johnD@gmail.com" value={userData.data.email} onChange={handleChange}/>
                            <InputForm label="Password" name="password" type="password"/>
                            <div className="flex justify-end">
                                <Button type="submit" className="bg-sky-500 text-white rounded-xl hover:bg-sky-600 px-5 py-2 shadow">Update</Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
export default ProfilePage
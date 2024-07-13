import { useCallback } from "react"

export const useLogout = () => {
    return useCallback(() => {
        localStorage.removeItem('token');
        // setTimeout(() => {
        //     window.location.href = '/';
        // }, 1000);
    }, [])
}
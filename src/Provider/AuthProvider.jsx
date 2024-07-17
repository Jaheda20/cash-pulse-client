import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,

    })


    const login = async (identifier, pin) =>{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
            identifier, pin
        })
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState({token, user})
    }

    const logOut = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthState({token: null, user: null})
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if(token && user){
            setAuthState({token, user})
        }
    }, [])

    return (
        <AuthContext.Provider value={{...authState, login, logOut}}>
            {children}           
        </AuthContext.Provider>
    );
};

export default AuthProvider;
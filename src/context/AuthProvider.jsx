import React, { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();
export default function AuthProvider ({children}) {
    const initialUser=localStorage.getItem('user');
    const [authuser, setauthuser] = useState(initialUser?JSON.parse(initialUser):null);

    return(
        <AuthContext.Provider value={{authuser, setauthuser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);
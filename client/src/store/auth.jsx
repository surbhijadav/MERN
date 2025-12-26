import React, { useContext, useState } from "react";


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
 
    const [token,setToken] = useState(localStorage.getItem("token"));


    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token',serverToken);

    };

let isLoggedIn = !!token;

//LogOut feature
const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
};

    return( <AuthContext.Provider value={{storeTokenInLS,LogoutUser,isLoggedIn}}>
        {children}
    </AuthContext.Provider>)
};


export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue) {
        throw new Error("useAuth used outside of the Provider")
    }
    return AuthContextValue;
}
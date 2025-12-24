import React, { useContext } from "react";


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token',serverToken);

    };

//LogOut feature


    return( <AuthContext.Provider value={{storeTokenInLS}}>
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
import React, { useContext, useEffect, useState } from "react";


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
 
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [services,setServices] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URI_API

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);

    };

const isAdmin = user?.isAdmin === true;
console.log("isAdmin:",isAdmin);

let isLoggedIn = !!token;

//LogOut feature
const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
};

// JWT Authentication - to get the currently logged in user data. 

const userAuthentication = async () => {
    try {
        setisLoading(true);
        const response = await fetch(`${API}/api/auth/user`,{
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}`,
            }
        });

        if(response.ok){
            const data = await response.json();
            console.log("User Data",data.userData);
            setUser(data.userData);
            setisLoading(false);
        }else{
           console.log("Error fetching user data");
           
            setisLoading(false);
        }
        
    } catch (error) {
        console.error("Error fetching user data");
        }};

// to fetch the services data from the databases
const getServices = async() => {
    try {
        const response = await fetch(`${API}/api/data/service`,{
            method : 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("FULL RESPONSE:", data);
            setServices(data);

        }
        
    } catch (error) {
        console.log(`services frontend error: ${error}`);
        
    }
}


useEffect(() => {
    if (token) {
        userAuthentication();
        getServices();
    } else {
        setUser(null);
    }
}, [token]);




    return( <AuthContext.Provider 
    value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
        isAdmin,
        }}>
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
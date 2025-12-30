import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {

const URL = "http://localhost:5000/api/auth/register"
const [user,setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : "",
});

const navigate = useNavigate();

const {storeTokenInLS} = useAuth();

// handling the input values
const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
        ...user,
        [name] : value,
    })
}

//handle form submit
const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
        const response = await fetch(URL, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(user),
        });

        if (response.ok){
            const res_data = await response.json();
            console.log("res from server",res_data);
            // store the token in localhost
            storeTokenInLS(res_data.token); //OR
            // localStorage.setItem("token",res_data)
            setUser(
               { username : "",
                email : "",
                phone : "",
                password : "",});
                navigate("/login")
};
        console.log(response);
        

    } catch (error) {
        console.log("Register",error);
        
    } 
};

    return(
        <>
        <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                            <img 
                            src="/images/register.png" 
                            alt="Register image"
                           />
                        </div>

                        {/* registration Form */}
                        <div className="section-form">
                            <h1 className="main-heading mb-3">Registration form</h1><br />

                            <form onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                     type="text"
                                     name="username"
                                     placeholder="Enter username" 
                                     id="username"
                                     required
                                     autoComplete="off"
                                     value={user.username}
                                     onChange={handleInput}/>
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                     type="email"
                                     name="email"
                                     placeholder="Enter email" 
                                     id="email"
                                     required
                                     autoComplete="off"
                                     value={user.email}
                                     onChange={handleInput}/>
                                </div>

                                <div>
                                    <label htmlFor="Phone">Phone number</label>
                                    <input
                                     type="text"
                                     name="phone"
                                     placeholder="Enter number" 
                                     id="phone"
                                     required
                                     autoComplete="off"
                                     value={user.phone}
                                     onChange={handleInput}/>
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                     type="password"
                                     name="password"
                                     placeholder="Enter password" 
                                     id="password"
                                     required
                                     autoComplete="off"
                                     value={user.password}
                                     onChange={handleInput}/>
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main> 
        </section>

        </>
    )
}
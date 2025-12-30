import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () => {

const URL = "http://localhost:5000/api/auth/login"

const [user,setUser] = useState({
        email : "",
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
    try {
        const response = await fetch(URL,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(user),
        });

        console.log("Login form:",response);
        

        if (response.ok){
            alert("Login Succefully");
            // store the token in localhost
            const res_data = await response.json();
            storeTokenInLS(res_data.token);
            // localStorage.setItem("token",res_data.token)
            setUser(
               {
                email : "",
                password : "",});  
                navigate('/');           
            } else {
                alert("Invalid credentials");
                console.log("Invalid credentials");   
            }
        
    } catch (error) {
        console.log(error);
        
    }}

    return(
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="container grid grid-two-cols">
                            <div className="contact-img"> 
                                <img src="/images/login.png" 
                                alt="LogIn Image"
                               />
                            </div>

                            {/* login form  */}
                        <div className="section-form">
                           <h1 className="main-heading mb-3">Login Form</h1>

                            <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                name="email"
                                id="email"
                                placeholder="enter email"
                                value={user.email}
                                onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                name="password"
                                id="password"
                                placeholder="enter password"
                                value={user.password}
                                onChange={handleInput} />
                            </div>

                            <br />
                                <button type="submit" className="btn btn-submi">Login Now</button>
                           </form>
                        </div>
                    </div>
                    </div>
                </main>
            </section>
        </>
    )
}
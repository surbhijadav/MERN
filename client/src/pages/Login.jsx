import { useState } from "react"

export const Login = () => {

const [user,setUser] = useState({
        email : "",
        password : "",
    });

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
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
}

    return(
        <>
            <section>
                <main>
                    <div>
                        <div className="container grid grid-two-cols">
                            <div>
                                <img src="/images/login.png" 
                                alt="LogIn Image"
                                height="500"
                                width="500" />
                            </div>

                            {/* login form  */}
                        <div>
                           <form onChange={handleSubmit}>
                            <h1>Login Form</h1>

                            <div>
                                <label htmlFor="username">Email</label>
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
                                <button type="submit" className="btn btn-submit">Login Now</button>
                           </form>
                        </div>

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
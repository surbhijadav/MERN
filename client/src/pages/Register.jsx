import { use, useState } from "react"

export const Register = () => {
const [user,setUser] = useState({
    username : "",
    email : "",
    phone : "",
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
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="/images/register.png" 
                            alt="Register image"
                            width="500"
                            height="500" />
                        </div>

                        {/* registration Form */}
                        <div className="registration-form">
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
                                     type="number"
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
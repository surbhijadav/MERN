export const Login = () => {
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
                           <form >
                            <h1>Login Form</h1>

                            <div>
                                <label htmlFor="username">UserName</label>
                                <input type="text"
                                name="username"
                                id="username"
                                placeholder="enter UserName" />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                name="password"
                                id="password"
                                placeholder="enter password" />
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
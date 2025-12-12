export const Contact = () => {
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
                            <h1 className="main-heading mb-3">Contact Us</h1><br />

                            <form  >
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                     type="text"
                                     name="username"
                                     placeholder="Enter username" 
                                     id="username"
                                     required
                                     autoComplete="off"
                                    //  value={user.username}
                                    //  onChange={handleInput}
                                    />
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
                                    //  value={user.email}
                                    //  onChange={handleInput}
                                    />
                                </div>

                               

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <input
                                     type="textarea"
                                     name="textarea"
                                     placeholder="Enter message" 
                                     id="message"
                                     required
                                     autoComplete="off"
                                    //  value={user.password}
                                    //  onChange={handleInput}
                                     />
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
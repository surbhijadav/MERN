import { useState } from "react"

export const Contact = () => {

const [contact,setContact] = useState({
    username : "",
    email : "",
    message : "",
});

// handleSubmit
const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
}

// handleInput
const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
        ...contact,
        [name]: value,
    });

    // or 
    // setContact((prev)=> ({
    //     ...prev,
    //     [name]: value,
    // }))
};





    return(
        <>
            <section className="section-contact">
                {/* <div className="contact-content container">
                    <h1 className="main-heading">Contact US</h1>
                </div> */}
          
                {/* <div className="section-registration"> */}
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                            <img 
                            src="/images/register.png" 
                            alt="Register image"
                          />
                        </div>

                        {/* registration Form */}
                        <section className="section-form">
                            <form onSubmit={handleSubmit} >

                            {/* <div className="contact-content container">
                                <h1 className="main-heading">Contact US</h1>
                             </div> */}
                                <div>
                                    <label htmlFor="contactname">username</label>
                                    <input
                                     type="text"
                                     name="username"
                                     placeholder="Enter contactname" 
                                     id="username"
                                     required
                                     autoComplete="off"
                                     value={contact.username}
                                     onChange={handleInput}
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
                                     value={contact.email}
                                     onChange={handleInput}
                                    />
                                </div>

                               

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                     name="textarea"
                                     placeholder="Enter message" 
                                     id="message"
                                     cols={30}
                                     rows={6}
                                     required
                                     value={contact.password}
                                     onChange={handleInput}
                                     />
                                </div>

                                <div>
                                <button type="submit" className="btn btn-submit ">Register Now</button>
                                </div>
                                
                            </form>
                        </section> 
                    </div>
                </section>
                {/* </div> */}
        
        <section className="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.555962209903!2d72.531482!3d23.0400705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b745e75c2b%3A0x1fe2c45c3c04601d!2sAlpha%20One%20Mall%2C%20261%2C%20Sarkari%20Vasahat%20Road%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1766230600138!5m2!1sen!2sin"
         width="100%" height="450" 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        

        </>
    )
}
import { NavLink } from "react-router-dom"

export const Error = () => {
    return(
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page Not found</h4>
                    <p>Ooops! It seems like the page you're trying to access doen't exist.If you believe there's an issue free to report it,and we'll look into it.</p>

                    <div  >
                    <NavLink to="/" ><button>Return Home</button></NavLink>
                    <NavLink to="/contact" ><button className="secondary-btn">Report</button> </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}
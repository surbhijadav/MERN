import { Analytics } from "../components/Analytics";

export const About = () => {
    return(
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>we are the world best IT company</p>
                <h1>Welcome to tech</h1>
                <p>I am a software developer passionate about creating clean, efficient, and impactful digital solutions. With experience in modern frameworks and problem-solving, I enjoy transforming ideas into functional applications that deliver smooth user experiences. </p>
                <div className="btn btn-group">
                  <a href="/contact">
                   <button className="btn">connect now</button>
                  </a>
                             
                  <a href="/">
                   <button className="btn secondary-btn">Learn More</button>
                  </a>
                  </div>
              </div>

              {/* hero image */}
              <div className="hero-image">
                <img src="/images/home.png" 
                alt="Home Image"
               height="500"
               width="500"
               />
              </div>
            </div>
          </section>
        </main>

        {/* 2nd section  */}
        <Analytics/>

        
        </>
    );
}   
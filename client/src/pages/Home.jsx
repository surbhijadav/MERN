export const Home = () => {
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
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>registered companies</p>
            </div>

            <div className="div1">
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="div1">
              <h2>500+</h2>
              <p>well known Developers</p>
            </div>

            <div className="div1">
              <h2>24/7</h2>
              <p>service</p>
            </div>

          </div>
        </section>

        {/* 3rd section  */}
        <section className="section-hero">
            <div className="container grid grid-two-cols">
               {/* hero image */}
              <div className="hero-image">
                    <img src="/images/design.png" 
                    alt="Home Image"
                  height="500"
                  width="500"
                  />
              </div>
              <div className="hero-content">
                <p>we are here to help you</p>
                <h1>Get started Today</h1>
                <p>We are a fast-growing tech startup focused on building smart, intuitive software products that simplify everyday tasks. From design to deployment, we focus on creating seamless experiences driven by innovation and data-driven insights. </p>
                <div className="btn btn-group">
                  <a href="/contact">
                   <button className="btn">connect now</button>
                  </a>
                             
                  <a href="/">
                   <button className="btn secondary-btn">Learn More</button>
                  </a>
                  </div>
              </div>
          </div>    
        </section>
        </>
    );
}   
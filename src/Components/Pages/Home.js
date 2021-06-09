import React from "react";
import Wrapper from "../Wrapper";
import image from "./profile-pic.jpg";
import "../styles/home.css";
import Stephs_Resume from "../Pages/assets/Stephs_Resume.pdf";

function Home() {
  return (
    <>
      <Wrapper>
        <section
          className="container border border-white"
          style={StyleSheet.Portfolio}
        >
          <section className="row m-3 p-3">
            <section className="col-sm-9">
              <h1 className="display-5 text-info">About Me</h1>
            </section>
          </section>

          <section className="row">
            <section className="clearfix">
              <figure className="col-md-3">
                <img
                  src={image}
                  className="img-fluid float-md-start m-2 "
                  alt="profile picture"
                />
              </figure>

              <p>
                My name is Stephanie Murphy, I currently work as a QA
                Technician. I am also a Beginner Full Stack Developer from
                Syracuse, NY. I love and enjoy the process of becoming a
                proffessional Web Developer. Learning different languages are
                very intersting. Html CSS, SQL, NoSQL, are the languages I've
                experienced so far and ofcorse Javascript which interest me the
                most. Reactjs and Nodejs are the frameworks that I have most
                recently learned and worked with.
              </p>

              <p>
                I love listening to music, dancing, watching movies and enjoying
                some me time to rejuvenate my soul. I definietly enjoy learning
                new things. Learning how to code is a new thing for me but it is
                very interesting, fun and challenging.
              </p>

              <p>
                Being able to pursue a career in coding/programming means so
                much to me. I'm a visual person and being able to generate a
                vision or someone elses vision is absolutely amazing.
              </p>
              <p>
                On my free time I like to chill out with my family, watch
                movies, have conversations about our past (reminisce) because we
                have some very funny stories to tell and or share Lol. I've been
                with my other half for 23 years and we have five beautiful
                children ages 10-21, three boys and two girls. Also on my free,
                free time I like to hang out with friends and enjoy life.
              </p>
              <p>Resume: <a href="https://docs.google.com/document/d/1iVfDRl7o4-J22V2BHrLdQVJD05cP3poLL8t4cCMovoA/edit" alt="takes you to Resume on GoogleDocs" className="about-me__resume-link">View</a> | <a href={Stephs_Resume} alt="Download Resume" className="about-me__resume-link"download="Stephs_Resume">Download</a></p>
            </section>
          </section>
        </section>
      </Wrapper>
    </>
  );
}

export default Home;

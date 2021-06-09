import React from "react";
import Wrapper from "../Wrapper";
import BudgetTracker from "../Pages/assets/BudgetTracker.PNG";
import WeatherDashboard from "../Pages/assets/WeatherDashboard.PNG";
import WorkdayScheduler from "../Pages/assets/WorkdayScheduler.PNG";
import KitchenBlogger from "../Pages/assets/KitchenBlogger.PNG";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>
      <Wrapper>
        <section class="container pb-3" style={StyleSheet.Portfolio}>
          <section className="row m-3 p-3">
            <section className="col-sm-9">
              <h1 className="display-5 text-info">Portfolio</h1>
            </section>
          </section>

          <section className="row row-cols-1 row-cols-md-2 g-4">
            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={BudgetTracker}
                  className="card-img-top"
                  alt="{BudgetTracker}"
                />
                <section className="card-body">
                  <h5 className="card-title">The Budget Tracker</h5>
                  <p className="card-text">
                  This application is a simple budget tracker
                  </p>
                  <a
                    href="https://shielded-retreat-13776.herokuapp.com/"
                    className="btn btn-info"
                  >
                    Budget Tracker
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={WeatherDashboard}
                  className="card-img-top"
                  alt="{WeatherDashboard}"
                />
                <section className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">
                    Weather outlook for multiple cities.
                  </p>
                  <a
                    href="https://github.com/smurphy823/Weather-Dashboard.git"
                    className="btn btn-info"
                  >
                    A Weather Dashboard app
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={WorkdayScheduler}
                  className="card-img-top"
                  alt="{WorkdayScheduler}"
                />
                <section className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">
                    Create a simple calendar application that allows a user to
                    save events for each hour of the day. This app will run in
                    the browser and feature dynamically updated HTML and CSS
                    powered by jQuery.
                  </p>
                  <a
                    href="https://smurphy823.github.io/Work-Day-Scheduler/"
                    className="btn btn-info"
                  >
                    WorkDay Scheduler Dashboard
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={KitchenBlogger}
                  className="card-img-top"
                  alt="{KitchenBlogger}"
                />
                <section className="card-body">
                  <h5 className="card-title">Kitchen Blogger</h5>
                  <p className="card-text">
                  This is a recipe sharing blog post application
                  </p>
                  <a
                    href="https://kitchenblogger.herokuapp.com/"
                    className="btn btn-info"
                  >
                    Kitchen Blogger
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
      </Wrapper>
    </>
  );
}

export default Portfolio;

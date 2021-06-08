import React, {useState} from "react";
import Project from "./Project"

function Portfolio() {
    const [homeworks] = useState([
        {
            title: "WorkdayScheduler",
            deployed: "https://github.com/smurphy823/Work-Day-Scheduler.git",
            github: "https://smurphy823.github.io/Work-Day-Scheduler/",
            description: "A simple calendar app for scheduling your work day",
            imgLink: `../assets/imgs/WorkdayScheduler.PNG`
        },
        {
            title: "WeatherDashboard",
            deployed: "https://github.com/smurphy823/Weather-Dashboard.git",
            github: "https://smurphy823.github.io/Weather-Dashboard/",
            description: "A weather dashboard app",
            imgLink: `../assets/imgs/WeatherDashboard.PNG`
        },
        {
            title: "KitchenBlogger",
            deployed: "https://github.com/vinhkhamhuynh/Kitchen-Blogger.git",
            github: "https://kitchenblogger.herokuapp.com/",
            description: "This is a recipe sharing blog post application",
            imgLink: `../assets/imgs/KitchenBlogger.PNG`
        },
        {
            title: "FitnessTracker",
            deployed: "https://github.com/smurphy823/Workout-Tracker.git",
            github: "https://stark-tor-23631.herokuapp.com/",
            description: "A daily tracking fitness app",
            imgLink: `../assets/imgs/FitnessTracker.PNG`
        },
        {
            title: "BudgetTracker",
            deployed: "https://shielded-retreat-13776.herokuapp.com/",
            github: "https://smurphy823.github.io/Online-Offline-Budget-Trackers/",
            description: "This application is a simple budget tracker",
            imgLink: `../assets/imgs/BudgetTracker.PNG`
        },
        {
            title: "UserDirectory",
            deployed: "https://github.com/smurphy823/Employee-Directory/tree/main",
            github: "https://smurphy823.github.io/Employee-Directory/",
            description: "A react app that renders from a random user API and displays users in a company",
            imgLink: `../assets/imgs/UserDirectory.PNG`
        },
    ])

    return(
        <div>
            {
                homeworks.map((homework, id) => (
                <Project homework = {homework} key = {id}>

                </Project>
                ))
            }
        </div>
    )
}

export default Portfolio;
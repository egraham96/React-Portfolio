import './projects.css';

// Screenshots of Projects
import ShopMyCloset from '../../assets/ShopMyCloset.PNG';
import FitnessTracker from '../../assets/FitnessTracker.PNG';
import WhereToStream from '../../assets/WhereToStream.PNG';
import TripPlanner from '../../assets/TripPlanner.PNG';
import HRPortal from '../../assets/HRPortal.PNG';
//import Placeholder from '../../assets/Placeholder.png'



function Projects() {
    const projects = [
       {title: 'Shop My Closet', repo: 'https://github.com/egraham96/Shop-My-Closet', img: ShopMyCloset, desc: 'Shop My Closet is an application that allows users to sell their used clothing & shoes. Payments processed through Stripe.js.', tools: 'JavaScript, React, Express, NodeJS, MongoDB', site:'https://shop-my-closet.herokuapp.com/'},
       {title: 'HR Portal', repo: 'https://github.com/egraham96/HR-Portal', img: HRPortal, desc: 'HR Portal is a web application that allows hiring managers and HR professionals to manage job applicants in a visually intuitive and effective manner. It allows users to input, modify, filter and score potential employees based on the results of their interviews.', tools: 'JavaScript, React, Express, NodeJS, MongoDB', site:'https://hr-portal-app.herokuapp.com/'},
       {title: 'Where to Stream', repo: 'https://github.com/egraham96/Where-To-Stream', img: WhereToStream, desc: 'Where to Stream is an application that allows users to input any movie or tv show and access links where the movie or show can be streamed online. Where to Stream users can also add or remove movies & shows to their very own Watchlist. Finally, users can also add a personal review of any movie or show on their Watchlist.', tools: 'JavaScript, Express, NodeJS, MySQL2, Sequelize, Bcrypt, Bulma UI', site:'https://where-to-stream.herokuapp.com/'},
       {title: 'Fitness Tracker', repo:'https://github.com/egraham96/FitnessTracker', img: FitnessTracker, desc:'This application allows users to view, create and track daily workouts. Users can also log multiple exercises in a workout on a given day. Finally, users are also able to track the name, type, weight, sets, reps, and duration of exercise.', tools: 'MongoDB, Mongoose, DotEnv, Morgan, JavaScript, Node.js, Express, CSS, HTML', site: 'https://immense-headland-48390.herokuapp.com/'},
        {title: 'Trip Planner Lite', repo:'https://github.com/egraham96/Travel-Planner-Lite', img: TripPlanner, desc:'A simple application that allows users to plan upcoming trips. Simply input the name of your destination and be presented with current and future weather data. Also, see popular hotels, restaurants and attractions near their destination.', tools: 'JavaScript, jQuery, jQuery UI, Travel Advisor API, OpenWeather Map API, UIKit', site: 'https://egraham96.github.io/Travel-Planner-Lite/'},
    ]

    return(
        <>
        <div id='projects'>
            <h2>PROJECTS</h2>
            <div className='card-container'>
                {projects.map(project => (
                    <div className='card'>
                        <img class="card-image" src={project.img} alt={project.img}/>
                        <h3>{project.title}</h3>
                        <a href={project.repo}>GitHub Repo</a>
                        <a href={project.site}>Deployed App</a>
                        <p>{project.desc}</p>
                        <p>Technologies Used: <br/> {project.tools}</p>
                    </div>
                ))}
                </div>
        <div id="projects-footer">
        <p>Please see my <a href="https://github.com/egraham96">Github</a> for more projects!</p>
        </div>
        </div>
        </>
    )
}

export default Projects;
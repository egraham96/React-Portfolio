import './projects.css';

// photos
//import Rescuties from '../../assets/rescuties-home.png'
//import ToDo from '../../assets/todo.png';
import ShopMyCloset from '../../assets/ShopMyCloset.PNG';
import FitnessTracker from '../../assets/FitnessTracker.PNG'
import WhereToStream from '../../assets/WhereToStream.PNG'
import Placeholder from '../../assets/Placeholder.png'
import tripPlanner from '../../assets/tripPlanner.png'



function Projects() {
    const projects = [
       {title: 'Shop My Closet', repo: 'https://github.com/egraham96/ShopMyCloset', img: ShopMyCloset, desc: 'Shop My Closet is an application that allows users to sell their used clothing & shoes. Payments processed through Stripe.js.', tools: 'JavaScript, React, Express, NodeJS, MongoDB', site:'https://shop-my-closet.herokuapp.com/'},
       {title: 'Where to Stream', repo: 'https://github.com/egraham96/Where-To-Stream', img: WhereToStream, desc: 'Where to Stream is an application that allows users to input any movie or tv show and access links where the movie or show can be streamed online. Where to Stream users can also add or remove movies & shows to their very own Watchlist. Finally, users can also add a personal review of any movie or show on their Watchlist.', tools: 'JavaScript, Express, NodeJS, MySQL2, Sequelize, Bcrypt, Bulma UI', site:'https://where-to-stream.herokuapp.com/'},
       {title: 'Fitness Tracker', repo:'https://github.com/egraham96/FitnessTracker', img: FitnessTracker, desc:'This application allows users to view, create and track daily workouts. Users can also log multiple exercises in a workout on a given day. Finally, users are also able to track the name, type, weight, sets, reps, and duration of exercise.', tools: 'MongoDB, Mongoose, DotEnv, Morgan, JavaScript, Node.js, Express, CSS, HTML', site: 'https://immense-headland-48390.herokuapp.com/'},
        {title: 'Trip Planner Lite', repo:'https://github.com/egraham96/Travel-Planner-Lite', img: tripPlanner, desc:'A simple application that allows users to plan upcoming trips. Simply input the name of your destination and be presented with current and future weather data. Also, see popular hotels, restaurants and attractions near their destination.', tools: 'JavaScript, jQuery, jQuery UI, Travel Advisor API, OpenWeather Map API, UIKit', site: 'https://egraham96.github.io/Travel-Planner-Lite/'},
        // {title: 'Portfolio (this!)', repo:'https://github.com/aysiae/portfolio', img: Portfolio, desc: 'A web developer portfolio site.', tools:'JavaScript, SCSS, ReactJS', site: 'https://aysiabrown.herokuapp.com/'}
    ]

    return(
        <>
        <div id='projects'>
            <h2>Projects</h2>
            <div className='card-container'>
                {projects.map(project => (
                    <div className='card'>
                        <img src={project.img}/>
                        <h3>{project.title}</h3>
                        <a href={project.repo}>GitHub Repo</a>
                        <a href={project.site}>{project.site == 'Coming Soon' ? <p>Coming Soon</p> : <p>Deployed App</p>}</a>
                        <p>{project.desc}</p>
                        <p>Technologies Used: <br/> {project.tools}</p>
                    </div>
                ))}
            </div>
            <p>Please see my <a href="https://github.com/egraham96">github</a> for more projects</p>
        </div>
        </>
    )
}

export default Projects;
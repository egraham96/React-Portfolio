import './current_projects.css';

//Images of Documents
import LeetcodeImg from '../../assets/Leetcode.png';
import UWImg from '../../assets/UW.png';




function CurrentProjects() {

    const projects = [
        { title: 'December 2023 Leetcode Challenge', link: 'https://github.com/egraham96/December-2023-Leetcode', img: LeetcodeImg },
        { title: 'University of Washington CSE 142', link: 'https://github.com/egraham96/UW-CSE-142', img: UWImg }
    ]

    return (
        <>
            <div id='current_projects'>
                <h2>FOLLOW MY PROGRESS...</h2>
                <div className='card-container'>
                    {projects.map(project => (
                        <div className='card-document'>
                            <img class="current_projects-image" src={project.img} alt={project.img} />
                            <a href={project.link}>
                                <h3>{project.title}</h3></a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CurrentProjects;
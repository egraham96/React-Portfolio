import './about.css';
import emma from '../../assets/emma.jpg';
import code from '../../assets/code.jpg';
import code2 from '../../assets/code2.jpg';
import code3 from '../../assets/code3.jpg';
import { useState } from 'react';


function About() {
    const [contact, setContact] = useState([
        { name: 'LinkedIn', value: 'https://linkedin.com/in/emmag96', img: "https://img.icons8.com/fluency/48/000000/linkedin.png" },
        { name: 'GitHub', value: 'https://github.com/egraham96', img: "https://img.icons8.com/fluency/48/000000/github.png" },
        { name: 'eegraham4@gmail.com', value: 'mailto:eegraham4@gmail.com', img: 'https://img.icons8.com/emoji/48/000000/e-mail.png' },
        { name: '206.947.5976', value: 'tel:2069475976', img: 'https://img.icons8.com/fluency/48/000000/phone.png' }
    ])

    const imgs = [code2, code3, code]


    return (
        <>
            <div id='container'>
                <div id='contact'>
                    <img src={emma} img alt={"emma graham"} />
                    {contact.map(item => (
                        <span>

                            <a href={item.value}><img src={item.img} alt={item.img} />
                            </a>
                            <p><a href={item.value}>{item.name}</a></p>
                        </span>
                    ))}
                </div>
                <div id='about'>
                    <div id='blurb'>

                        <span>
                            <h4>Are you seeking a junior developer? </h4>
                            <p>Hi, I'm Emma, a fullstack developer eager to jump into a fun, challenging role in software development, where I can learn from my teammates and more seasoned developers to expand my technical skillset. </p>
                            <p>My passion for software engineering lies in its unique combination of creativity and critical problem-solving. The most rewarding aspects of this transition have been the incredible people I've met who are eager to share their knowledge, coupled with the discipline I've developed along the way.</p>
                        </span>

                    </div>
                    <div id='skills'>
                        <span>
                            <p class="skills-header"><b>➥ Programming Languages:</b></p>
                            <p>JavaScript/Typescript, Java, Python, PHP, HTML, CSS</p>
                        </span>
                        <span>
                            <p class="skills-header"><b>➥ Front-End Development:</b></p>
                            <p>HTML, CSS, ReactJS, React Native, Redux, Vue, Angular, jQuery, Next.js</p>
                        </span>
                        <span>
                            <p class="skills-header"><b>➥ Back-End Development:</b></p>
                            <p>Node.js, Express.js, Spring, SpringBoot, Django, Flask</p>
                        </span>
                        <span>
                            <p class="skills-header"><b>➥ Databases:</b></p>
                            <p>Amazon RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server), Amazon DynamoDB (NoSQL), MongoDB(NoSQL), Snowflake(SQL)</p>
                        </span>

                        <span>
                            <p class="skills-header"><b>➥Cloud Platforms:</b></p>
                            <p>AWS (Elastic Beanstalk, S3 Buckets, Lambda Functions), Google Cloud Platforms</p>
                        </span>

                    </div>
                    <div id='education'>
                        <p class="education-header"><b>Education:</b></p>
                        <p><u>University of Washington Professional and Continuing Education / Seattle, WA / June 2021 - January 2022</u></p>
                        <p> Certification in Fullstack Web Development</p>
                        <br></br>
                        <p><u>University of Washington / Seattle, WA / Sept 2015 - December 2019</u></p>
                        <p> Dual Degree in Political Economy and Law, Societies and Justice</p>
                    </div>
                </div>
                <div id='decor'>
                    {imgs.map(img => (
                        <img src={img} alt={img} key={img} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default About;
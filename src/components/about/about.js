import './about.css';
import picture from '../../assets/picture.jpg';
import code from '../../assets/code.jpg';
import code2 from '../../assets/code2.jpg';
import code3 from '../../assets/code3.jpg';
import { useState } from 'react';


function About() {
    const [contact, setContact] = useState([
        {name: 'LinkedIn', value: 'https://linkedin.com/in/emmag96', img:"https://img.icons8.com/fluency/48/000000/linkedin.png"},
        {name: 'GitHub', value: 'https://github.com/egraham96', img: "https://img.icons8.com/fluency/48/000000/github.png"},
        {name: 'eegraham4@gmail.com', value: 'mailto:eegraham4@gmail.com', img:'https://img.icons8.com/emoji/48/000000/e-mail.png'},
        {name: '206.947.5976', value: 'tel:2069475976', img: 'https://img.icons8.com/fluency/48/000000/phone.png'}
    ])

    const imgs = [code2, code3, code ]


    return(
        <>
        <div id='container'>
            <div id='contact'>
                 <img src={picture} img alt={picture} />
                    {contact.map(item => (
                        <span>

                        <a href={item.value}><img src={item.img} alt={item.img}/>
                        </a>
                        <p><a href={item.value}>{item.name}</a></p>
                        </span>
                    ))}
            </div>
            <div id='about'>
                <div id='blurb'>

                    <span>
                    <h4>Are you seeking a full-stack JavaScript developer? </h4>
                    <p>Hi, I'm Emma. I'm a 2019 University of Washington graduate who recently went back to UW to complete a Full Stack Coding Bootcamp. I specialize in full stack JavaScript development. I love creating web applications because web development is the perfect union between my two passions of creativity and critical problem solving.  </p>
                    </span>
                    
                </div>
                <div id='skills'>
                    <span>
                        <p>➥ Languages:</p>
                        <p>JavaScript, HTML, CSS, PHP (beginner), Python(beginner)</p>
                    </span>
                    <span>
                        <p>➥ Frameworks & Libraries:</p>
                        <p>NodeJS, ReactJS, Redux, React Native, jQuery, Express, PostgreSQL, MongoDB, Angular</p>
                    </span>

                    <span>
                        <p>➥ Tools:</p>
                        <p>Git, GitHub, VS Code, AWS (Elastic Beanstalk, S3 Buckets, Lambda Functions), Firebase (Authentication, Realtime Database, Cloudstore Database)</p>
                    </span>

                </div>
                <div id='education'>
                    <p id="education-p">Education:</p>
                    <p>University of Washington Professional and Continuing Education / Seattle, WA / June 2021 - Jan 2022
                        <br /> Certification in Full Stack Web Development
                    </p>
                    <p>University of Washington / Seattle, WA / Sept 2015 - December 2019
                        <br /> Dual Degree in Political Economy and Law, Societies and Justice
                    </p>
                </div>
            </div>
            <div id='decor'>
                {imgs.map(img => (
                    <img src= {img} alt={img} key={img}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default About;
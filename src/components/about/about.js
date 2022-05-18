import './about.css';
import picture from '../../assets/picture.jpg';
import { useState } from 'react';


function About() {
    const [contact, setContact] = useState([
        {name: 'LinkedIn', value: 'https://linkedin.com/in/emmagraham96', img:"https://img.icons8.com/fluency/48/000000/linkedin.png"},
        {name: 'GitHub', value: 'https://github.com/egraham96', img: "https://img.icons8.com/fluency/48/000000/github.png"},
        {name: 'eegraham4@gmail.com', value: 'mailto:eegraham4@gmail.com', img:'https://img.icons8.com/emoji/48/000000/e-mail.png'},
        {name: '206.947.5976', value: 'tel:2069475976', img: '"https://img.icons8.com/ultraviolet/40/000000/phone.png"'}
    ])

    const imgs = ['https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 'https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80', 'https://images.unsplash.com/photo-1531707640331-138af9bef850?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80']


    return(
        <>
        <div id='container'>
            <div id='contact'>
                 <img src={picture} img alt={picture} />
                    {contact.map(item => (
                        <span>

                        <a href={item.value}><img src={item.img}/></a>
                        <p>{item.name}</p>
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
                    <p>Education:</p>
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
                    <img src={img} img alt={img}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default About;
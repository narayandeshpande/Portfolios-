import React, { useState } from 'react';
import php from "../../public/php.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import AboutProj from './AboutProj';
import MERN from "../../public/MERN.jpg"

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
   

    const cardItem = [
        {
            id: 1,
            logo: php,
            name: "PHP",
            drc: "Bank System project",
            about: "This is bank system project in that project i used PHP and MySQL database, in that project i implemented transection money one bank custoner to another and see the all transectin history and bank balence",
            live: "https://github.com/narayandeshpande/-Bank-System.git"
        },
        {
            id: 2,
            logo: nodejs,
            name: "HTML and Java Script",
            drc: "Weather App",
            about: "This is Weather App project in that i use a free API for tempreter and for GUI i use Bootstrap and for handling API use java Script.",
            live: "https://github.com/narayandeshpande/Weather_app.git"
        },
        {
            id: 5,
            logo: reactjs,
            name: "React Js",
            drc: "My portfolio",
            about: "This given web site created by React Js",
            live: "https://github.com/narayandeshpande/Weather_app.git"
        },
        {
            id: 6,
            logo: MERN,
            name: "MERN Stack",
            drc: "Book Store",
            about: "This is MERN stack project in that i use react js for frontend and express js for backend and for datastoring use MongoDB.",
            live: "https://github.com/narayandeshpande/Weather_app.git"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.getElementById("my_modal_3").showModal();
    };


    return (
        <div name="Projects" className='max-w-screen-2xl container max-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                <span className='underline font-semibold'>My created Projects</span>
                <div className="grid grid-col-1 md:grid-cols-4 gap-3 my-5">
                    {cardItem.map(({ id, logo, name, drc, about, live }) => (
                        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt={name} />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-white'>{drc}</p>
                            </div>
                            <div className='px-6 py-4 space-x-3 flex'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => openModal(about)}>About</button>
                                <a href={live} target='_blank' rel='noopener noreferrer'>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-center'>Source code</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && <AboutProj abouts={selectedProject} />}
        </div>
    );
};

export default Portfolio;

import React, { useState, useRef } from 'react';
import php from "../../public/php.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import AboutProj from './AboutProj';
import MERN from "../../public/MERN.jpg";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);  // Create a ref for the modal

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
            about: `A responsive Weather App built using HTML, CSS, and JavaScript. It fetches real-time weather data from a weather API and displays temperature, humidity, wind speed, and weather descriptions for any searched city.` +
                   `Technologies Used: HTML, CSS, JavaScript.`,
            live: "https://github.com/narayandeshpande/Weather_app.git"
        },
        {
            id: 5,
            logo: reactjs,
            name: "React Js",
            drc: "My portfolio",
            about: "A personal portfolio website built using React for Narayan Pravin Deshpande, showcasing his skills in web development, including proficiency in C, C++, Java, Python, PHP, JavaScript, and frameworks like React.js, Express.js, and Django. The site features sections on his skills, projects, experience, and contact information.",
            live: "https://github.com/narayandeshpande/Portfolios-.git"
        },
        {
            id: 6,
            logo: MERN,
            name: "MERN Stack",
            drc: "Word File to PDF file Converter",
            about: "This is a MERN stack project that involves using Multer module for file storage and Docx-pdf module for converting Word documents to PDF files. The frontend is developed using React.js while the backend is implemented using Express.js. The project aims to provide a user-friendly interface for uploading and converting Word documents to PDF format.",
            live: "https://github.com/narayandeshpande/Word_to_pdf.git"
        },
        {
            id: 7,
            logo: reactjs,
            name: "React Js",
            drc: "Country Information",
            about: "This project is a web application designed to provide detailed information about different countries. It utilizes React for building the user interface and Tailwind CSS for styling, ensuring a responsive and visually appealing design. The application fetches data from a free API to display relevant country details.",
            live: "https://github.com/narayandeshpande/Country-Information.git"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        if (modalRef.current) {
            modalRef.current.showModal();
        } else {
            console.error("Modal element is not available.");
        }
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
            <dialog id="my_modal_3" ref={modalRef}>
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">About the Project</h3>
                    <p className="py-4">{selectedProject}</p>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            {selectedProject && <AboutProj abouts={selectedProject} />}
        </div>
    );
};

export default Portfolio;

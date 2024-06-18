import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { ReactTyped } from "react-typed";
import pic from "../../public/me.png"
const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container max-auto px-4 md:px-20 my-20' >
                <div className=" flex flex-col md:flex-row">
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped className='text-red-700 font-bold'
                                //   typedRef={setTyped}
                                strings={["Developer", "Programmer", "Coder","पंडित "]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-base md:text-mt text-justify'>Hello,My name is Narayan Pravin Deshpande, <br />
                        I am Web Developer and coder  <br />
                        <span className='text-red-700 font-bold'>
                        अहं पण्डितः अहं ऋग्वेदी संहिता च यदनिकी च शिक्षितवान्.</span><br />
                        I known the C , C++, java, python, PHP, Java Script and many programing languages. <br />
                        I known the freamworks like React js, Express js, Django
                        </p><br />
                        {/* social media icons */}
                        <div className='flex  flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>
                                    Available on
                                </h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/narayan.deshpande.104?mibextid=ZbWKwL" target='_blank'>
                                            <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/narayan-deshpande-35aa1a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a>  </li>

                                    <li>
                                        <a href="https://www.instagram.com/n_p_deshpande2219?igsh=eW4zdzJvMG5qdzlx" target='_blank'><FaInstagram className='text-2xl cursor-pointer' /></a></li>
                                    <li>
                                        <a href="" target='_blank'><FaTelegram className='text-2xl cursor-pointer' /></a></li>


                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>
                                    Currently working on
                                </h1>
                                <ul className='flex space-x-5'>
                                    <li><FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                                    <li>   <SiDjango className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                                    <li><SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                                    <li><DiMongodb className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 '>
                        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home

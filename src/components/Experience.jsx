import React from 'react'
import css from "../../public/css.jpg"
import html from "../../public/html.png"
import js from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import java from "../../public/java.png"
import python from "../../public/python.webp"
import c from "../../public/c-lang.jpeg"
import cpp from "../../public/cpp.png"
import php from "../../public/php.png";
import reactjs from "../../public/reactjs.png";
import express from "../../public/express.png"
import mongo from "../../public/mongodb.jpg"


const Experience = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:java,
            name:"Java"
        },
        {
            id:3,
            logo:css,
            name:"CSS"
        },
        {
            id:4,
            logo:js,
            name:"Java Script"
        },
        {
            id:5,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:6,
            logo:python,
            name:"Python"
        },
        {
            id:7,
            logo:c,
            name:"C Language"
        },
        {
            id:8,
            logo:cpp,
            name:"C++"
        },
        {
            id:9,
            logo:php,
            name:"PHP"
        },
        {
            id:10,
            logo:reactjs,
            name:"React Js"
        },
        {
            id:11,
            logo:express,
            name:"Express Js"
        },
        {
            id:12,
            logo:mongo,
            name:"MongoDB"
        }

    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container max-auto px-4 md:px-20 mt-10'>
        <div className="">
            <h1 className='text-3xl font-bold mb-5 '>Experiance</h1>
            <span className='underline font-semibold'></span>
            <div className=" grid grid-cols-2 md:grid-cols-5 gap-7 my-5">
            {
                cardItem.map(({id,logo,name})=>(
                    <div className=' flex flex-col items-center justify-center rounded-full  p-1 curser-pointer  hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[200px]  p-1 rounded-full border-[2px]' alt="" />
                        <div>
                            <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                            {/* <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem!</p> */}
                        </div>
                        {/* <div className='px-6 py-4 space-x-3 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2  rounded'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Experience


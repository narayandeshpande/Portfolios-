import React from 'react'

const About = () => {
  return (
    <div  name="About" className='max-w-screen-2xl container max-auto px-4 md:px-20 my-16'>
   <div>
   <h1 className='text-3xl font-bold mb-5 '>About</h1>
      <p>Hello, I'm Narayan, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</p>
      <br />
      <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
      <span className=''>I am a student of BCA-(Science), at MIT arts commerce and Science college alandi , university [Savitribai Phule Pune University], [2023-2025] <br />
            <span className="text-red-700 font-bold">I learned ऋग्वेदी संहिता and यदनिकी at श्री नरसिंह सरस्वती पाठशाळा आळंदी देवाची.
            </span>
</span> <br /><br />
      <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
      <ul>
            <li>Proficient in [C,C++,python,Java]</li>            
            <li>Experienced with [React js and Express js]</li>            
            <li>Strong grasp of [CSS and some css freamworks tailwind and Bootstrap]</li>            
            <li>  Excellent problem-solving skills Effective communicator and collaborator</li>            

      </ul>
      <span> 
</span> <br /><br />
      {/* <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
      <span>[Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Freelance/Contract Work], [Client/Organization], [Dates] [Brief description of projects and contributions]
</span><br /><br /> */}
      {/* <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
      <span>[Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]
</span><br /><br /> */}
      <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
      <span>My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
</span><br /><br />
   </div>
    </div>
  )
}

export default About

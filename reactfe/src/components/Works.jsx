import { React, useState, useEffect} from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, projectlink } from '../assets';
import { SectionWrapper } from '../hoc';
//import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { urlFor, client } from '../utils/client';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {  
    const query = '*[_type == "projects"]';
  
    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);



  return (
    <>
      {projects.map((project, index) => (
        <motion.div 
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          <Tilt
            options={{ 
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full'
          >
          
            <div className='relative w-full h-[230px]' key={index}>
              <img 
                src={urlFor(project.imgUrl)}
                alt={project.name}
                className='w-full h-full object-cover rounded-2xl'
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div 
                  onClick={() => window.open(project.codeLink, "blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img 
                    src={github} 
                    alt="github"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
                <div 
                  onClick={() => window.open(project.projectLink, "blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img 
                    src={projectlink} 
                    alt="projectlink"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
          
            <div className='mt-5 '>
              <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
            </div>
            
          

          <div className='mt-4 flex flex-wrap gap-2'>
              <p 
                key={index} 
                className={`text-[14px] blue-text-gradient`}
              >
                {project.tags} 
              </p>
          </div>
        </Tilt>
      </motion.div>
    ))};
  </>
  )
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Below, you can see real-life examples of what I can produce! Each projects
          has a link to its own cloud repository, and a direct link to the application!
          You can see various technologies, coding principles, design systems, and 
          effective management.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>

          <Projects 
            
          />
      </div>
    </>
  )  
}

export default SectionWrapper(Works, "");
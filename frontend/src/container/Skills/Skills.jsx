import './Skills.scss'
import { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const mySkills = [
  { name: 'HTML', icon: images.html},
  { name: 'CSS', icon: images.css},
  { name: 'JavaScript', icon: images.javascript},
  { name: 'Sass', icon: images.sass},
  { name: 'Node', icon: images.node},
  { name: 'React', icon: images.react},
  { name: 'PHP', icon: images.php},
  { name: 'Java', icon: images.java},
  { name: 'C', icon: images.c},
  { name: 'C#', icon: images.csharp},
  { name: 'MySQL', icon: images.mysql},
  { name: 'MongoDB', icon: images.mongodb},
  { name: 'MUI', icon: images.mu5},
  { name: 'Git', icon: images.git},
  { name: 'Postman', icon: images.postman},
  { name: 'Jira', icon: images.jira},
  { name: 'Trello', icon: images.trello},
  { name: 'Visual Studio', icon: images.visualstudio},
  { name: 'Netbeans', icon: images.netbeans},
  { name: 'Azure', icon: images.azure},
  { name: 'Docker', icon: images.docker},
  
]

const Skills = () => {
  const [skills, setSkills] = useState(mySkills);


  return (
    <Fragment>
      <h2 className="head-text">Skills & Technologies</h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: '#ffffff' }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))
          }
        </motion.div>
      </div>
    </Fragment>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);
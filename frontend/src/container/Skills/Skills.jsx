import './Skills.scss'
import { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(experienceQuery)
      .then((data) => {
        setExperiences(data);
      })

    client.fetch(skillQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])


  return (
    <Fragment>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))
          }
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {console.log(experience.works)}
                {experience.works.map((work) => (
                  <Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      
                    </motion.div>
                    <Tooltip
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      id={work.name}
                      // place='bottom'
                      key={work.name}
                      content={work.desc}
                    />
                  </Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default AppWrap(Skills, 'skills');
import { Fragment, useEffect, useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import './Experience.scss';
import 'react-tooltip/dist/react-tooltip.css';
import { urlFor, client } from '../../client';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const experienceQuery = '*[_type == "experiences"]';
    
        client.fetch(experienceQuery)
          .then((data) => {
            setExperiences(data);
          })
      }, [])

    return (
        <Fragment>
            <h2 className="head-text">Experience & Professional Qualifications</h2>
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
        </Fragment>
    )
}

export default AppWrap(
    MotionWrap(Experience, 'app__experience'),
    'experience',
    "app__primarybg"
)
import { Fragment } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Experience.scss';
import 'react-tooltip/dist/react-tooltip.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    const experiences = [{
        duration: '2023 - Present',
        name: 'Teaching Assistant',
        company: 'Nalanda IUHS Campus - Galle',
        desc: "I'm currently work as a Teaching Assisitent in Nalanda IUHS Campus. I'm teaching Object Oriented Proframming with Java and Project Management. And also I'm responsible for monitoring students' personal projects."
    }]

    return (
        <Fragment>
            <h2 className="head-text">Experience</h2>
            <div className="app__experience-container">
                {experiences.map((experience) => (
                    <ExperienceItem
                        duration={experience.duration}
                        name={experience.name}
                        company={experience.company}
                        desc={experience.desc} />
                ))
                }
            </div>
        </Fragment>
    )
}

export default AppWrap(
    MotionWrap(Experience, 'app__experience'),
    'experience',
    "app__whitebg"
)
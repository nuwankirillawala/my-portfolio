import { Fragment } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Education.scss';
import 'react-tooltip/dist/react-tooltip.css';
import EducationItem from './EducationItem';

const Education = () => {
    const educations = [{
        duration: '2020 - Present',
        name: 'Bachelor of Computer Science',
        company: 'University of Ruhuna',
        desc: 'I worked as a ta'
    },
    {
        duration: '2019 - 2020',
        name: 'Diploma in Software Engineering',
        company: 'Esoft Metro Campus - Kalutara',
        desc: 'I worked as a ta'
    }
]

    return (
        <Fragment>
            <h2 className="head-text">education</h2>
            <div className="app__education-container">
                {educations.map((education) => (
                    <EducationItem
                        duration={education.duration}
                        name={education.name}
                        company={education.company}
                        desc={education.desc} />
                ))
                }
            </div>
        </Fragment>
    )
}

export default AppWrap(
    MotionWrap(Education, 'app__education'),
    'education',
    "app__primarybg"
)
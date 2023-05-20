import { Fragment } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Education.scss';
import 'react-tooltip/dist/react-tooltip.css';
import EducationItem from './EducationItem';

const Education = () => {
    const educations = [{
        duration: '2020 - Now',
        name: 'Bachelor of Computer Science',
        company: 'University of Ruhuna',
        desc: ''
    },
    {
        duration: '2019 - 2020',
        name: 'Diploma in Software Engineering (DiSE)',
        company: 'Esoft Metro Campus - Kalutara',
        desc: ''
    },
    {
        duration: '2019 - 2020',
        name: 'Diploma in English (DiE)',
        company: 'Esoft Metro Campus - Kalutara',
        desc: ''
    },
    ]

    return (
        <Fragment>
            <h2 className="head-text">Education - <span>Academic</span> Accomplishments</h2>
            <div className="app__education-container">
                <div className="app__education-column">
                    {educations.map((education) => (
                        <EducationItem
                            duration={education.duration}
                            name={education.name}
                            company={education.company}
                            desc={education.desc} />
                    ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default AppWrap(
    MotionWrap(Education, 'app__education'),
    'education',
    "app__primarybg"
)
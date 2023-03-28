import { Fragment } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Interests.scss';
import 'react-tooltip/dist/react-tooltip.css';
import InterestsItem from './InterestsItem';

const Interests = () => {
    const interests = [{
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
            <h2 className="head-text">interests <span>&</span> Activities</h2>
            <div>
                <p className="app__interests-desc">
                    Apart form begin a developer, I most enjoy watching movies and tv serise. also have a great liking of traveling and spend time outdoors. It is dream of my to travel around Sri Lanka and also foreign countries. As a undergraduate student i always beleive i should help others to improve their knowleadge in the computer science. So i like to spend as much as my time for wellbeing of the student community in the university.
                </p>
            </div>
            <div className="app__interests-container">
                <div className="app__interests-column">
                {interests.map((interest) => (
                    <InterestsItem
                    duration={interest.duration}
                    name={interest.name}
                    company={interest.company}
                    desc={interest.desc}
                    />
                    ))
                }
                </div>
                <div className="app__interests-column">
                {interests.map((interest) => (
                    <InterestsItem
                    duration={interest.duration}
                    name={interest.name}
                    company={interest.company}
                    desc={interest.desc}
                    />
                    ))
                }
                </div>
                
                
                
            </div>
        </Fragment>
    )
}

export default AppWrap(
    MotionWrap(Interests, 'app__interests'),
    'interests',
    "app__primarybg"
)
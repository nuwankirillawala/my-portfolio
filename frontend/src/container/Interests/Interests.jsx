import { Fragment } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Interests.scss';
import 'react-tooltip/dist/react-tooltip.css';
import InterestsItem from './InterestsItem';
import SportItem from './SportItem';

const Interests = () => {
    const interests = [{
        duration: '2020 - Now',
        name: 'Computer Science Student Commiunity',
        works: [
            { name: 'Organizer & Announcer' },
            { name: 'Microsoft Cloud Skill Challenge' },
            { name: 'rTECHulate Session Series' }
        ],
        desc: 'I worked as a ta'
    },
    {
        duration: '2021 - Now',
        name: 'Career Guidance Unit & Career Circle ',
        works: [
            { name: 'Coordinator & Announcer' },
            { name: 'Career Fair – 2021' },
            { name: 'University Medical Camp – 2022' },
            { name: 'Leadership Camp for Damma School Prefects in Galle District – 2022' },
        ],
        desc: 'I worked as a ta'
    },
    {
        duration: '2022 - Now',
        name: 'STEMUP Volunteer',
        works: [
            { name: 'Lead & Initiator of Ruhuna STEMUP Volunteer Hub ' },
            { name: 'Coder - Dojo Program' },
        ],
        desc: 'I worked as a ta'
    },
    {
        duration: '2016 - 2020',
        name: 'Cristopian Astronomy Society (KCAS)',
        works: [
            { name: 'Founder & Former President' },
        ],
        desc: 'I worked as a ta'
    }
    ];

    const sports = [
        {
            duration: '2015 - 2021',
            name: 'Kick Boxing',
            level: 'Island Level Winnings',
            desc: ''
        },
        {
            duration: '2021 - Now',
            name: 'Taekwondo',
            level: 'University Bronze Medal',
            desc: ''
        },
        {
            duration: '2022 - Now',
            name: 'Weight-Lifting & Power-Lifting',
            level: 'University Player',
            desc: ''
        },
    ];

    return (
        <Fragment>
            <h2 className="head-text">interests <span>&</span> Activities</h2>
            <div>
                <p className="app__interests-desc">
                    Apart from being a developer and a programmer, I most enjoy <span>reading books and watching movies and TV series.</span> Additionally, have a passion to <span>write articles and blogs</span>. As an undergraduate student, I always believe I should help others to improve their knowledge and skills in computer science. Thus I like to devote as much of my time to the well-being of the student community at the university and as a STEMUP volunteer.
                </p>
            </div>
            <div className="app__interests-container">
                <div className="app__interests-column">
                    {interests.map((interest) => (
                        <InterestsItem
                            duration={interest.duration}
                            name={interest.name}
                            works={interest.works}
                            desc={interest.desc}
                        />
                    ))
                    }
                </div>
                <div className="app__interests-column">
                    {sports.map((sport) => (
                        <SportItem
                            duration={sport.duration}
                            name={sport.name}
                            level={sport.level}
                            desc={sport.desc}
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
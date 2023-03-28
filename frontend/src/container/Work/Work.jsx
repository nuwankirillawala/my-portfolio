import './Work.scss'
import { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const myworks = [{
  title: 'Test Project',
  description: 'Test Desc',
  projectLink: '',
  gitHubLink: '',
  imgUrl: images.about01,
  tags: ['React Js', 'All' ]
},
{
  title: 'Test Project',
  description: 'Test Desc',
  projectLink: '',
  gitHubLink: '',
  imgUrl: images.about01,
  tags: ['UI/UX', 'All']
}
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState(myworks)
  const [filterWork, setFilterWork] = useState(myworks)

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}])
    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}])

      if(item === 'All'){
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        My Creative
        <span> Poortfolio </span>
        section
      </h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React Js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app_flex">
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target="_blank" rel='noreffer'>
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel='noreffer'>
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{work.description}</p>

              <div className="app__work-tag app_flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
);
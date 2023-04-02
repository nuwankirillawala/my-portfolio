import './Work.scss'
import { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const myworks = [{
  title: 'Industrial Training Management System',
  description: 'ITMS is a web platform for manage industrial training programme in Department of Computer Science - University of Ruhuna.',
  projectLink: '',
  gitHubLink: '',
  imgUrl: images.intern,
  tags: ['MERN', 'React', 'Node', 'Web App', 'All']
},
{
  title: 'Helios Resturant Website',
  description: 'Website for Helios resturant. This has multiple pages includng Home, About, Services, Blog, Team ad FAQ. I use React and Saas for fontend web development.',
  projectLink: 'https://helios-resturant.netlify.app/',
  gitHubLink: 'https://github.com/nuwankirillawala/helios-resturant-app',
  imgUrl: images.helios_poster,
  tags: ['React', 'UI/UX', 'Sass', 'Web App', 'All']
},
{
  title: 'Modern Portfolio Website with Sanity CMS',
  description: 'This mordern portfolio is created with react and saas. I use Sanity CMS to manage the backend. This portfolio is much better for non-developer person also.',
  projectLink: 'https://my-portfolio-henna-eta-34.vercel.app/',
  gitHubLink: 'https://github.com/nuwankirillawala/modern-portfolio-react-sanity',
  imgUrl: images.nuwan_dev_portfolio,
  tags: ['UI/UX', 'React', 'Sass', 'Sanity', 'Web App', 'All']
},
{
  title: 'Reservio - Booking App',
  description: 'Reservio is a booking app that create for Sri Lanka. I use MERNstack to develop this app.',
  projectLink: '',
  gitHubLink: 'https://github.com/nuwankirillawala/reservio-booking-app',
  imgUrl: images.reservio,
  tags: ['MERN', 'React', 'Node', 'Web App', 'All']
},
{
  title: 'Whisper - Messanger Chat App',
  description: 'A realtime chat application using Socket.io. The more advanced version is still in development.',
  projectLink: 'https://realtime-chat-app-socket-io.vercel.app/',
  gitHubLink: 'https://github.com/nuwankirillawala/realtime-chat-app-socket-io',
  imgUrl: images.chatapp,
  tags: ['React', 'Node', 'Web App', 'All']
},
{
  title: 'Code Ally - OpenAI Chat App',
  description: 'This AI chat app is created using OpenAI --text-davinci-003 model. Much like ChatGPT but not the same one.',
  projectLink: 'https://code-ally-open-ai.vercel.app/',
  gitHubLink: '',
  imgUrl: images.codeally,
  tags: ['VanillaJS', 'Node', 'Web App', 'OpenAI','All']
},
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState(myworks)
  const [filterWork, setFilterWork] = useState(myworks)

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }])
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        My Development
        <span> Portfolio </span>
        Section
      </h2>

      <div className="app__work-filter">
        {['UI/UX', 'MERN', 'React', 'Node', 'VanillaJS', 'Sass', 'Web App', 'OpenAI', 'All'].map((item, index) => (
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
                <a href={work.projectLink ? work.projectLink: '/notfound'} target="_blank" rel='noreffer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.githubLink ? work.githubLink: '/notfound'} target="_blank" rel='noreffer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

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
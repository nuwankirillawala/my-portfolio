import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import ProfileCard from './ProfileCard';
import { images } from '../../constants';
import { Fragment } from 'react';

const About = () => {

  return (
    <Fragment>
      <h2 className="head-text">
        Who's Behind the Code? <span>Meet Me!</span>
      </h2>

      <div className="app__profiles">
        <ProfileCard
          title='Web Developer'
          description='I am a skilled web developer with expertise in MERN stack technologies, including React, Node, Express, and MongoDB. I also have experience using SaaS and popular CSS frameworks such as Tailwind and Material-UI. With a focus on responsive design and user experience, I create dynamic and scalable web applications.'
          imgUrl={images.frontend}
        />
        <ProfileCard
          title='UI/UX Designer'
          description='As a UI/UX designer, I combine my artistic flair with technical expertise to design digital products that are not only aesthetically pleasing but also intuitive and user-friendly. With a focus on user research and collaboration, I strive to create experiences that exceed expectations and drive business success'
          imgUrl={images.uiux}
        />
        <ProfileCard
          title='Backend Developer'
          description="I specialize in developing robust and scalable APIs that power modern web applications. I am proficient in using Node.js, one of my favorite frameworks, to build fast and efficient server-side applications."
          imgUrl={images.backend}
        />
        <ProfileCard
          title='Software Developer'
          description='I have a passion for creating standalone desktop applications, responsive web applications, and mobile apps that are both functional and visually stunning. With expertise in a variety of programming languages and platforms, I am able to design and build customized solutions that meet the unique needs of businesses and individuals.'
          imgUrl={images.software}
        />

      </div>
    </Fragment>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);
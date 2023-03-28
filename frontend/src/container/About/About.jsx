import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import ProfileCard from './ProfileCard';
import { images } from '../../constants';

const About = () => {

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Apps </span>
        <br />
        means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        <ProfileCard 
        title='test'
        description='testdes'
        imgUrl={images.about03}
        />
        <ProfileCard 
        title='test'
        description='testdes'
        imgUrl={images.about03}
        />
        <ProfileCard 
        title='test'
        description='testdes'
        imgUrl={images.about03}
        />
        <ProfileCard 
        title='test'
        description='testdes'
        imgUrl={images.about03}
        />
        <ProfileCard 
        title='test'
        description='testdes'
        imgUrl={images.about03}
        />
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);
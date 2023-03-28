import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { Fragment } from 'react';
import { images } from '../../constants/';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  const testimonials = [{
    name: 'Harry Potter',
    company: 'Hogwarts',
    feedback: 'Good Developer',
    imgUrl: images.sass
  },
  {
    name: 'John Cena',
    company: 'WWE',
    feedback: 'You cant see me',
    imgUrl: images.adidas
  }
  ];

  const brands = [{
    name: '',
    imgUrl: images.sass
  }]

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Fragment>
      {testimonials.length && (
        <Fragment>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </Fragment>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={index}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg',
);
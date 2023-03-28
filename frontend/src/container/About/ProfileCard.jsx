import './About.scss';
import { motion } from 'framer-motion';

import React from 'react'

const ProfileCard = (props) => {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
        >
            <img src={props.imgUrl} alt={props.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{props.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{props.description}</p>
        </motion.div>
    )
}

export default ProfileCard;
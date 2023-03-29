import { Fragment} from 'react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import './Interests.scss';
import 'react-tooltip/dist/react-tooltip.css';

const SportItem = (props) => {
    return (
        <motion.div
            className="app__interest-item"
        >
            <div className="app__interest-year">
                <p className="bold-text">{props.duration}</p>
            </div>
            <motion.div className="app__interest-works">
                <Fragment>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__interest-work"
                        data-tooltip-id={props.name}
                    >
                        <h4 className="bold-text">{props.name}</h4>
                        <p className="p-text">{props.level}</p>
                    </motion.div>
                    {/* <Tooltip
                        effect="solid"
                        arrowColor="#fff"
                        className="interest-tooltip"
                        id={props.name}
                        place='bottom'
                        content={props.desc}
                    /> */}
                </Fragment>
            </motion.div>
        </motion.div>
    )
}

export default SportItem
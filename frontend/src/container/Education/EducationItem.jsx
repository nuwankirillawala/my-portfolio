import { Fragment} from 'react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import './Education.scss';
import 'react-tooltip/dist/react-tooltip.css';

const EducationItem = (props) => {
    return (
        <motion.div
            className="app__education-item"
        >
            <div className="app__education-year">
                <p className="extra-bold-text">{props.duration}</p>
            </div>
            <motion.div className="app__education-works">
                <Fragment>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__education-work"
                        data-tooltip-id={props.name}
                    >
                        <h4 className="extra-bold-text">{props.name}</h4>
                        <p className="bold-p-text">{props.company}</p>

                    </motion.div>
                    {/* <Tooltip
                        effect="solid"
                        arrowColor="#fff"
                        className="education-tooltip"
                        id={props.name}
                        place='bottom'
                        content={props.desc}
                    /> */}
                </Fragment>
            </motion.div>
        </motion.div>
    )
}

export default EducationItem
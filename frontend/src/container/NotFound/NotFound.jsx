import './NotFound.scss'
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="app__notfound">
            <div className="app__notfound-item">
                <h2 className="head-text">
                    Oops! I'm still <span>working on it!</span>
                </h2>
            </div>
            <div className="app__notfound-item">
                <img src={images.notfoundimg} alt="" />
            </div>
            <div className="app__notfound-item">
                <button onClick={() => navigate("/")} className="p-text">
                    Go Back to Home Page
                </button>
            </div>
        </div>
    )
}

export default NotFound;
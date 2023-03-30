import './NotFound.scss'
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NotFound = (props) => {
    const navigate = useNavigate();

    return (
        <div className="app__notfound">
            {props.type === 'working' ?
                <>
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
                </> :
                <>
                    <div className="app__notfound-item">
                        <h2 className="head-text">
                            Oops! <span>Error 404</span> - Demonic Delusions
                        </h2>
                    </div>
                    <div className="app__notfound-item app__notfound-p">
                        <h2 className="p-text">
                            Breath Style: Not Found. It seems you've ventured into uncharted territory, but fear not, for the path you seek may still be found. As a wise demon slayer once said, 'We can't waste time worrying about the what-ifs.' So let us journey forth and explore other parts of my portfolio together!
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
                </>
            }
        </div>
    )
}

export default NotFound;
{/* <div className="app__notfound-item">
                        <h2 className="head-text">
                            Oops! <span>Error 404</span> - Demonic Delusions
                        </h2>
                        <p className="p-text">
                        Breath Style: Not Found. It seems you've ventured into uncharted territory, but fear not, for the path you seek may still be found. As a wise demon slayer once said, 'We can't waste time worrying about the what-ifs.' So let us journey forth and explore other parts of this site together!
                        </p>
                    </div> */ }

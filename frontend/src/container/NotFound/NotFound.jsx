import './NotFound.scss'
const NotFound = () => {
  return (
    <div className="app__notfound">
        <div className="app__notfound-item">
        <h2 className="head-text">
            Oops! I'm still <span>working on it!</span>
        </h2>
        </div>
        <div className="app__notfound-item">
        <button className="p-text">
            Go Back to Home Page
        </button>
        </div>
        
    </div>
  )
}

export default NotFound;
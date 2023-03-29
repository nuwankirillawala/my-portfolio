import {BsGithub, BsMedium, BsLinkedin} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/nuwan-kirillawala-0b275018b/" target='_blank'>
          <BsLinkedin />
          </a>
        </div>
        <div>
            <a href="https://web.facebook.com/nuwan.kirillawala" target='_blank'>
            <FaFacebook />
            </a>
        </div>
        <div>
            <a href="https://github.com/nuwankirillawala" target='_blank'>
            <BsGithub />
            </a>
        </div>
        <div>
          <a href="https://functionater.medium.com/" target='_blank'>
            <BsMedium />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
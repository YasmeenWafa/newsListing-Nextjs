import socialShareStyles from '../styles/shareBox.module.css';
import {MdEmail} from 'react-icons/md';
import {IoIosShareAlt} from 'react-icons/io'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const SocialShare = ({shares}) => {
    
    return(
    <div className={socialShareStyles.sharesBox}>
        <div className={socialShareStyles.sharesNumber}>
            <h1>{shares}</h1>
            <p>shares</p>
        </div>
        <div className={socialShareStyles.options}>
            <div className={socialShareStyles.option}>
                <MdEmail/> 
                <span>Email</span>
            </div>
            <div className={socialShareStyles.option}>
                <FaFacebookF/> 
                <span>Facebook</span>
            </div>
            <div className={socialShareStyles.option}>
                <FaTwitter/>  
                <span>Twitter</span>
            </div>
            <div className={socialShareStyles.option}>
                <IoIosShareAlt/>  
                <span>More</span>
            </div>
        </div>
    </div>
    )
}
export default SocialShare;
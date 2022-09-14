import boxStyles from '../styles/box.module.css'
import styles from '../styles/main.module.css'
import {AiFillFacebook, AiFillGooglePlusSquare, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai';
import {FaTumblrSquare, FaYoutubeSquare} from 'react-icons/fa';

const FollowUs = () => {
    return (
        <div className={boxStyles.container}>
            <h2 className={`${styles.subtitle}`}>Follow Us</h2>
            <div className={boxStyles.icons}>
                <AiFillFacebook className={boxStyles.icon} style={{color: '#3e5a96'}}/>
                <AiFillTwitterSquare className={boxStyles.icon} style={{color: '#20c4eb'}}/>
                <AiFillGooglePlusSquare className={boxStyles.icon} style={{color: '#ea452d'}}/>
                <FaYoutubeSquare className={boxStyles.icon} style={{color: '#d4120d'}}/>
                <AiFillLinkedin className={boxStyles.icon} style={{color: '#047fb7'}}/>
                <FaTumblrSquare className={boxStyles.icon} style={{color: '#2b4868'}}/>

            </div>
        </div>
    )
}

export default FollowUs;
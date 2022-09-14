import Header from "./components/header";
import Footer from "./components/footer";
import styles from './styles/main.module.css'
import {FaChevronCircleUp} from 'react-icons/fa';

const Layout = ({ children }) => {

    return (
        <div id="top">
            <Header/>
            <div className={styles.mainInner}>{children}</div>
            <Footer/>
            <a href="#top" className={styles.scrollTop}><FaChevronCircleUp/></a>
        </div>
    );
};

export default Layout;

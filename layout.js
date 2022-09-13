import Header from "./components/header";
import Footer from "./components/footer";
import styles from './styles/Home.module.css'

const Layout = ({ children }) => {

    return (
        <div>
            <Header/>
            <div className={styles.mainInner}>{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;

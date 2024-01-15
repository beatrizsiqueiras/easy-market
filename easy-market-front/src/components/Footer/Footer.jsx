import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <h3 className={styles.h3_footer}>
                    We register your sales with efficiency and accuracy.
                </h3>
                <p className={styles.p_footer}>EasyMarket &copy; 2024</p>
            </footer>
        </>
    );
};

export default Footer;

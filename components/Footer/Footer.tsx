import styles from "./Footer.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>test my skils</p>
                </div>
                <div className={styles.copyright}>
                    <p>© 2026 Bavly Wagih. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
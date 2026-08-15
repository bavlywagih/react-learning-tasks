import Link from "next/link";
import styles from "./Navbar.module.css";
function Navbar() {
    return (
        <>
            <ul className={styles.navbar_ul}> 
                <h2>bavly portfolio</h2> 
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/counter">Counter</Link></li>
            </ul>
        </>
    )
}

export default Navbar;
import styles from "./Login.module.css";
function Login() {
    return (
        <>
        <form className={styles.login}>
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" />
        </form>
        </>
    )
}

export default Login ;
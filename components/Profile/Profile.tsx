import styles from "./Profile.module.css";
type ProfileParams = {
    name : string ,
    age : number ,
    job : string;
}

function profile (props:ProfileParams) {
    return (
        <>
        <div className={styles.card}>
            <div>
                <h1>{props.name}</h1>
                <p className={styles.title}>{props.job}</p>
                <p>I am learning React</p>
                <p>Age: {props.age}</p>
            </div>
            <p><button className={styles.button_profile} >Contact</button></p>
            </div>
        </>
    )
}

export default profile;
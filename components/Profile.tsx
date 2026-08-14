type ProfileParams = {
    name : string ;
    age  : number ;
    job  : string ;
}

function Profile (props:ProfileParams) {
    return (
        <>
        <h2>
            My name is {props.name}  <br />
            Iam {props.age}  years old  <br />
            I am learning {props.job}
        </h2>
        </>
    )
}


export default Profile;
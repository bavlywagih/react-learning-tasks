type ContentParams = {
    course : string ; 
    level  : string ;
}


function Content(props:ContentParams) {
    return (
        <h2>
            I am currently learning {props.course} <br />
            my level is {props.level}

        </h2>
    )
}

export default Content ;
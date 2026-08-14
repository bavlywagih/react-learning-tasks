
type HeaderParams = {
    title : string;
}

function Header (props:HeaderParams) {
    return (
    <h1>Welcome to {props.title}</h1>
    )
}

export default Header ;
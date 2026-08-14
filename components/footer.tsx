type FooterParams = {
    year : number ;
}

function Footer(props : FooterParams){
    return (
        <h2>
            all rights reserved © {props.year}
        </h2>
    )
}

export default Footer;
import Navbar from "@/components/navbar";

function Contact() {
    return (
        <>
            <Navbar />
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto auto",width:"27rem",height:"27rem",border:"black 1px solid",alignItems:"center",borderRadius:"1rem"}}>
                <h1 style={{fontSize:"3rem", padding:"1rem"}}>
                    Contact Me
                </h1>
                <h2 style={{fontSize:"2rem", padding:"0.5rem"}}>
                    Email: bavly@example.com
                </h2>
            </div>
        </>
    )
}

export default Contact;
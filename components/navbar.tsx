import Link from "next/link";

function Navbar() {
    return (
        <>
        <div>
            <Link href="/" >Home</Link>
            <span> | </span>
            <Link href="/about" >About</Link>
            <span> | </span>
            <Link href="/counter" >Counter</Link>
        </div>
        </>
    )
}

export default Navbar;
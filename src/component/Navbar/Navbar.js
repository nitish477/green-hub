import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <>
           <span className="logo">
                    My website
                </span>
            <div className="nav">
             
                <Link to='/' className="ex-mar">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/blog'>Blog</Link>

            </div>
        </>
    )
}
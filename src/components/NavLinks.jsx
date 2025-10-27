import { Link, Outlet } from "react-router";
import "./header.css"

export default function NavLinks() {
    return (
       <div>
         <div className="header">
            <div style={{margin: '0px 10px', backgroundColor: '#132440'}}>
                <Link className="link" to='/'>
                <img src="/images/logo.png"
                 alt="" style={{width: '5rem', height: '56px'}}/>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li>
                        <Link to='/signinPage' className="link">Signin</Link>
                    </li>
                    <li>
                        <Link to='/about' className="link">About</Link>
                    </li>
                    <li>
                        <Link to='/profile' className="link">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
       </div>
    )
}
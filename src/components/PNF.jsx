import { Link } from "react-router";
import { Button } from "react-bootstrap";

export default function PageNotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <h1>Page Not Found</h1> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRED8T2Yh88s-D5BxoCEEGF8eto7j3RrxtuGw&s"
                alt="Page not found!" style={{ width: '470px' }} />
            <div>
                <Button>
                    <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                        Go to Home Page
                    </Link>
                </Button>
            </div>
        </div>
    )
}
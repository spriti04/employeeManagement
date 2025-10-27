import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import './form.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogIn = async(e) => {
        e.preventDefault();

        const url = "http://localhost:8080/emp/login";

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({email, password})
        });

        if(res.ok){
            const employee = await res.json();
            console.log("Employee: ", employee);
            

            //Save Employee data in localStorage / context for Profile Page
            localStorage.setItem("employee", JSON.stringify(employee));

            alert(`${employee.name} signed in successfully`);

            navigate("/profile")
        }else{
            const error = await res.text();
            alert("Sign in failed: " + error);
        }
    };

    return (
        <div className="card">
            <Form className="form">
                <h2>Signin!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleLogIn}>
                    Submit
                </Button>
                <p>
                    <Button className="ms-2" style={{ backgroundColor: '0065F8', width: '30px', padding: '1px' }}>
                        <Link to='/' style={{ color: 'white', marginBottom: '1px' }}>
                            <FaArrowLeft />
                        </Link>
                    </Button>
                    Don't have an account?
                    <Link to='/registerPage' style={{ textDecoration: 'none' }}>Register</Link>
                </p>
            </Form>
            {/* <h3><Link to='/'>Go To Home</Link></h3>
            <h1>Signin Page</h1> */}
        </div>
    )
}
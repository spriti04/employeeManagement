import { Button, Form } from "react-bootstrap";
import { Link } from "react-router";
import './form.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phNo, setPhNo] = useState('');
    const [password, setPassword] = useState('');
    const [deptName, setDeptName] = useState('');
    const [address, setAddress] = useState({
        city: '',
        state: '',
        pincode: ''
    });

    const createUser = async (e) => {
        e.preventDefault();
        console.log(name, email, phNo, password, deptName, address);

        const url = "http://localhost:8080/emp/save";

        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phNo, password, deptName, address })
        });

        const result = await res.text();

        if (res.ok) {
            alert("User registerd")
        }else{
            alert("Failed: " + result)
        }
    }

    return (
        <div className="card">
            <Form className="form">
                <h2>New Register</h2>
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhNo">
                    <Form.Control type="tel" placeholder="Enter Phone Number" onChange={(e) => setPhNo(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDepartment">
                    <Form.Control type="text" placeholder="Enter Department Name" onChange={(e) => setDeptName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Control type = "text" placeholder = "Enter City" 
                    value = {address.city} onChange={(e) => setAddress({...address, city: e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formState">
                    <Form.Control type = "text" placeholder = "Enter State" 
                    value = {address.state} onChange={(e) => setAddress({...address, state: e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPincode">
                    <Form.Control type = "text" placeholder = "Enter Pincode" 
                    value = {address.pincode} onChange={(e) => setAddress({...address, pincode: e.target.value})} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={createUser}>
                    Submit
                </Button>
                <p>
                    <Button className="ms-2" style={{ backgroundColor: '0065F8', width: '30px', padding: '1px' }}>
                        <Link to='/' style={{ color: 'white', marginBottom: '1px' }}>
                            <FaArrowLeft />
                        </Link>
                    </Button>
                    Already have an account?
                    <Link to='/signinPage' style={{ textDecoration: 'none' }}>
                        <span className="ms-2">Login</span></Link>
                </p>
            </Form>
        </div>
    )
}
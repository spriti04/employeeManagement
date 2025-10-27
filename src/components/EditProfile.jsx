import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import './form.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function EditProfile() {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phNo: '',
        password: '',
        deptName: '',
        address: {
            city: '',
            state: '',
            pincode: ''
        }
    });

    // Load Employee from LocalStorage
    useEffect(() => {
        const empData = localStorage.getItem('employee');
        if (empData) {
            setEmployee(JSON.parse(empData));
        }
    }, []);

    const handleChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        });
    };

    const handleAddressChange = (e) => {
        setEmployee({
            ...employee,
            address: { ...employee.address, [e.target.name]: e.target.value }
        });
    };

    const updateProfile = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8080/emp/update";

        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

        const result = await res.text();

        if (res.ok) {
            alert(result);
            localStorage.setItem("employee", JSON.stringify(employee));
            navigate("/profile");
        } else {
            alert("Update failed: " + result);
        }
    };

    return (
        <div className="card">
            <Form className="form">
                <h2>Edit Profile</h2>
                <Form.Group className="mb-3" controlId="formUpdateName" >
                    <Form.Control type="text" placeholder="Enter Name"
                        name="name" value={employee.name}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdateEmail">
                    <Form.Control type="email" name="email"
                        value={employee.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdatePhNo">
                    <Form.Control type="tel" name="phNo" value={employee.phNo}
                        placeholder="Enter Phone Number" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdatePassword">
                    <Form.Control type="password" name="password" placeholder="Entere New Password"
                        value={employee.password} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdateDepartment">
                    <Form.Control type="text" placeholder="Enter Department Name"
                        name="deptName" value={employee.deptName}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdateCity">
                    <Form.Control type="text" placeholder="Enter City"
                        name="city" value={employee.address.city}
                        onChange={handleAddressChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdateState">
                    <Form.Control type="text" placeholder="Enter State"
                        name="state" value={employee.address.state}
                        onChange={handleAddressChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUpdatePincode">
                    <Form.Control type="text" placeholder="Enter Pincode"
                        name="pincode" value={employee.address.pincode}
                        onChange={handleAddressChange} />
                </Form.Group>

                    <Button className="me-2" style={{ backgroundColor: '#0065F8', width: '40px', padding: '6px' }}>
                        <Link to='/profile' style={{ color: 'white' }}>
                            <FaArrowLeft />
                        </Link>
                    </Button>
                    <Button variant="primary" type="submit" onClick={updateProfile}>
                        Update
                    </Button>
            </Form>
        </div>
    );
}
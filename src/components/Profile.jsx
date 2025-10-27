import { VscLinkExternal } from "react-icons/vsc";
import { Link } from "react-router";
import './profile.css'
import { useEffect, useState } from "react";


export default function Profile() {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Get signed-in employee from local storage
        const empData = localStorage.getItem("employee");
        if(empData){
            setEmployee(JSON.parse(empData));
        }
    }, []);

    if(!employee) {
        return <h3>No Employee data found. Please sign in first.</h3>
    }

    return (

        <div className="profile-card" style={{ textAlign: 'center' }}>
            {/* <h1>Profile Page</h1> */}
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt=""
                style={{
                    borderRadius: '100%'
                }} />
                <br />
            </div>

            <h5 style={{ textDecorationLine: 'underline' }}>
                Edit Profile
                <Link to='/editProfile'>
                    < VscLinkExternal />
                </Link>
            </h5>
            <br />
            <div>
                <div className="details" style={{ textAlign: 'initial' }}>
                    <h6>Employee ID: {employee.id}</h6>
                    <h6>Name: {employee.name}</h6>
                    <h6>Email: {employee.email}</h6>
                    <h6>Mobile No: {employee.phNo}</h6>
                    <h6>Department: {employee.deptName}</h6>
                    <h6>Address: {employee.address.city},
                        {employee.address.state},
                        {employee.address.pincode}
                    </h6>
                </div>
            </div>
        </div >
    )
}
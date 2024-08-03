import React from 'react';
import './PersonalInfo.css';
import { useLocation } from 'react-router-dom';
const PersonalInfo = () => {

    const location=useLocation();
    const student=location.state?.user;

    if(!student)
        return <div>No Student data Available</div>

    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Contact Number:</strong> {student.contactNumber}</p>
        </div>
    );
}

export default PersonalInfo;

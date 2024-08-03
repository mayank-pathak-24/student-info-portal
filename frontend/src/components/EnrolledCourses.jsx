import React, { useEffect, useState } from 'react';
import './EnrolledCourses.css';
import { useLocation } from 'react-router-dom';

const EnrolledCourses = () => {
    // const courses = [
    //     { name: 'React Development', instructor: 'Jane Smith', duration: '10 weeks' },
    //     { name: 'Data Structures', instructor: 'John Doe', duration: '8 weeks' }
    // ];
    const location=useLocation();
    const user=location.state?.user
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        const fetchCourse=async()=>{
            try {
                const courseResponce=await fetch(`http://localhost:5010/course-info?userId=${user.id}`)
                const data=await courseResponce.json()
                setCourses(data.courses)
            } catch (error) {
                console.log('Error fetching courses:',error);
                
            }
            if(user?.id)
                fetchCourse()
        }
    },[user])
    return (
        <div className="enrolled-courses">
            <h2>Enrolled Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        <p><strong>Course Name:</strong> {course.name}</p>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EnrolledCourses;

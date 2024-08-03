import React from 'react';
import PersonalInfo from './PersonalInfo';
import EducationalHistory from './EducationalHistory';
import EnrolledCourses from './EnrolledCourses';
import './Home.css';

const Home = () => {
  const h1Style={
    textAlign: 'center'
  }
    return (
        <div className="home-container">
            <h1 style={h1Style}>Student Information</h1>
            <PersonalInfo />
            <EducationalHistory />
            <EnrolledCourses />
        </div>
    );
}

export default Home;

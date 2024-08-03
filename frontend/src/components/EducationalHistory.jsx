import React from 'react';
import './EducationalHistory.css';

const EducationalHistory = () => {
    const history = [
        { institution: 'ABC University', degree: 'BSc Computer Science', years: '2018-2022' },
        { institution: 'XYZ College', degree: 'High School Diploma', years: '2016-2018' }
    ];

    return (
        <div className="educational-history">
            <h2>Educational History</h2>
            <ul>
                {history.map((edu, index) => (
                    <li key={index}>
                        <p><strong>Institution:</strong> {edu.institution}</p>
                        <p><strong>Degree:</strong> {edu.degree}</p>
                        <p><strong>Years:</strong> {edu.years}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationalHistory;

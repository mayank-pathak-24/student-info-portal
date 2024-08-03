import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const user = { email, password };
            const response = await fetch("http://localhost:5010/login", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
                //Fetch user Details
                const userEmail=result.user.email;
                const userId=result.user.id;
                console.log(userId);
                
                console.log(userEmail);
                console.log();
                
                
                const detailsResponce=await fetch(`http://localhost:5010/user-details?email=${userEmail}`)
                const userDetails=await detailsResponce.json();

               // const courseResponce=await fetch('http://localhost:5010/course-info')
                setTimeout(() => {
                    setMessage("");
                    setEmail('')
                    setPassword('')
                    navigate('/home',{state:{user:userDetails}});
                    
                }, 1000);
            } else {
                setMessage(result.message);
                setTimeout(() => {
                    setMessage("");
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setMessage('An error occurred');
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    }

    return (
        <div className="Login">
            {message && <p className="tag">{message}</p>}
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@gmail.com"
                    required
                    autoComplete="off"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="abc@12Ad"
                    required
                    autoComplete="off"
                />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>Or</p>
            <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
        </div>
    );
}

export default Login;

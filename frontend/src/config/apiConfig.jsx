const API_BASE_URL=process.env.REACT_APP_BACKEND_URL||"http://localhost:5010"

export default{
    login:`${API_BASE_URL}/login`,
    userDetails:`${API_BASE_URL}/user-details`,
    signup:`${API_BASE_URL}/signup`
}
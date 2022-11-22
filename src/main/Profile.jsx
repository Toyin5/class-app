import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div>
            <Header />
            Profile
            <button onClick={logout} >Logout</button>
            {/* 
            * Show initialize attendance
            * Show stats for each class
            */}
            <Footer />
        </div>
    )
}

export default Profile
import React, { useEffect } from 'react'
import Footer from '../components/layouts/Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
function DashBoard() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/")
    })

    return (
        <div>
            <Header name={token.course_code} />
            <p>Welcome to {`${token.course_name} (${token._id})`} class by {token.lecturer_name}</p>
            <p>Head to the registeration page to register students</p>
            <Footer />
        </div>
    )
}

export default DashBoard
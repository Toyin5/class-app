import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
function DashBoard() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate();
    useLayoutEffect(() => {
        if (!token) navigate("/")
    }, [token])

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
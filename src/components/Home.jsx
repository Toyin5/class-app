import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
function Home() {
    const style = {
        "width": "100%",
        "height": "500px"
    }
    return (
        <div>
            <Header />
            <div style={style} className='main content has-text-centered'>
                Welcome to the Attendance Management System(Class App)
                <p>Proceed to the register section to get started</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home
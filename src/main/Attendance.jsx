import { Button, Typography } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react'
import Footer from '../components/layouts/Footer'
import UtilModal from '../components/utils/UtilModal';
import Header from './Header'

import React from 'react'


function Attendance() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [lecture_no, setLecture_no] = useState(null)
    const [open, setOpen] = useState(false);
    const [openM, setOpenM] = useState(false);

    const initialize = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/${token.course_code}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "lec": lecture_no
                })
            });
            const data = await result.json();
            console.log(data.data)
            setOpen(false)
            setOpenM(true)
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }


    return (
        <div>
            <Header />
            {/**
             * TODO
             * - A button to initialize attendance 
             * - A mini form to get lecture number
             * - Modal after button clicked
             * 
             */}
            <Typography>Attendance</Typography>
            <Button onClick={setOpen(true)}>Initialize Attendance</Button>
            <UtilModal open={open} handleClose={setOpen(false)} content={
                <form class="box" onSubmit={(e) => e.preventDefault()}>
                    <div class="field">
                        <label class="label">Lecture Number</label>
                        <div class="control">
                            <input class="input" type="numeric" placeholder="" onChange={(e) => setLecture_no(e.target.value)} required />
                        </div>
                    </div>
                    <button class="button is-primary" onClick={() => initialize()}>Initialize</button>
                </form>
            }
            />

            <UtilModal
                content={
                    <QrCode
                        url={`https://attendanceapi.vercel.app/api/attendance/${token.course_code}/${lecture_no}`}
                        size={256}
                        color="green"
                    />}
                open={openM}
                handleClose={setOpenM(false)}
            />


            <Footer />
        </div>
    )
}

export default Attendance
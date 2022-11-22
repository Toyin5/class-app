import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../components/layouts/Footer'
import Header from './Header'
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import { FaUser } from 'react-icons/fa';
import QrCode from '../components/utils/QrCode';
import UtilModal from '../components/utils/UtilModal';


function Attendance() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [lecture_no, setLectureNo] = useState()
    const [students, setStudents] = useState([])

    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
            margin: theme.spacing(0, 2),
        },
    }));
    const style = {
        "paddingTop": "30px"
    }

    const getStudents = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/get/class/${token._id}/${lecture_no}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const data = await result.json();
            // setStudents(data.data)
            console.log(data)
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }
    const initialize = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/${token._id}`, {
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
            // setStudents(data.data)
            console.log(data)
            handleOpen()
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => getStudents(), 2000);
        return () => clearInterval(interval);
    }, [lecture_no])


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h3>Class Attendance</h3>
                        <p>Enter lecture number and then generate code</p>
                        <input class="input" type="numeric" placeholder="Enter lecture No..." onChange={(e) => setLectureNo(e.target.value)} required />
                        <button onClick={() => { initialize() }} className='button is-large is-focus is-primary is-inverted'>Generate Code</button>

                        <UtilModal content={<QrCode url={`https://attendanceapi.vercel.app/api//attendance/${token._id}/${lecture_no}`} size={256} color="green" />} open={open} handleClose={handleClose} />
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h4>Lecture Attendees - {students.length}</h4>
                    </div>
                    <Divider />
                    {(students.length > 0) ?
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                        >

                            {students.map((student) => <ListItem key={student._id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FaUser />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={student.student_name} secondary={"ID: " + student._id} />
                                <Divider variant="inset" component="li" />
                            </ListItem>)
                            }
                        </List>
                        : (<p className='has-text-centered'>No student attended yet</p>)}
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Attendance
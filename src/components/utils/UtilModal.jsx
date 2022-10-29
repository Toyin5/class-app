import React from 'react'
import { Fade, Modal, Backdrop, Box } from '@mui/material'
import { FaBackward } from 'react-icons/fa';

function UtilModal({ ...props }) {
    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const style = {
        position: 'absolute',
        top: '20px',
        right: '20px'
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={styleModal}>
                        <span style={style} className="icon">
                            <FaBackward color='white' fill='red' onClick={props.handleClose} />
                        </span>
                        {props.content}
                        {/* <QrCode url="http://192.168.137.1:8080/app/register/student" size={256} color="green" /> */}
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default UtilModal
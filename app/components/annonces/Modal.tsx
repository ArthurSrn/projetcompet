import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardModal from './Card_modal';


import { TabScrollButton } from '@mui/material';

const style = {

};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Button className="text-white" onClick={handleOpen}>Nous contacter</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>

                    <Typography id="modal-modal-description" sx={{ mt: 5, mx: 2, }}>
                        <CardModal />
                    </Typography>
                </Box>

            </Modal>
        </div>
    );
}
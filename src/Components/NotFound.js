import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const NotFound = () => (
    <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Stack spacing={2}
            justifyContent="center"
            alignItems="center">
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </Stack>
    </Box>
);

export default NotFound;

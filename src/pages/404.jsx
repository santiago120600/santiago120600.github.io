import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    title:{
        fontSize:"150px",
    },
    mainContainer:{
        height: '100vh',
        width: '100%',
    },
}));

function NotFound() {
    const classes = useStyles();

    return (
        <Box
            className={classes.mainContainer}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography
                className={classes.title}
            >
                404
            </Typography>
        </Box>
    );
}
export default NotFound;

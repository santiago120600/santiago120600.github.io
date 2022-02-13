import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Helmet} from "react-helmet";

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
        <>
        <Helmet>
            <title>404</title>
            <meta name="description" content="No encontrado"/>
        </Helmet>
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
        </>
    );
}
export default NotFound;

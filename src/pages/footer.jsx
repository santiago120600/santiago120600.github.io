import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    body:{
        backgroundColor:"#d9d8d9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '5vw',
        [theme.breakpoints.down("sm")]: {
            height: '10vw',
        }
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <Container
            className={classes.body}
            maxWidth="false"
        >
            <Box
            >
                <Typography 
                    variant="subtitle1" 
                    align="center" 
                    color="textSecondary" 
                    component="p"
                >
                    Programundo © 2022
                </Typography>
            </Box>
        </Container>
    );
}

export default Footer;


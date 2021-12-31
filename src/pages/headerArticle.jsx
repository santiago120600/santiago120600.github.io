import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop:"55px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "40px",
        }
    },
    title: {
        marginTop: "10px",
        textAlign:"left",
        [theme.breakpoints.down("sm")]: {
            marginTop: "5px",
        }
    },
    author: {
        display: "flex"
    },
    description:{
        marginTop:"10px",
    },
    divider:{
        marginTop:"30px",
    },
    red:{
        backgroundColor:"red",
    }
}));

function Header(props) {
    const classes = useStyles();
    const { title, author, date, profile, description } = props;

    return (
        <Container maxWidth="sm" className={classes.mainContainer}>
            <Typography
                component="h2"
                variant="h3"
                color="inherit"
                align="left"
                className={classes.title}
            >
                {title}
            </Typography >
            <Typography 
                variant="subtitle1" 
                align="left" 
                color="textSecondary" 
                component="p" 
                className={classes.description}>
                {description}
            </Typography>
            <Divider className={classes.divider}/>
            <Container>
                <Box className={classes.author} mt={2}>
                    <Avatar src={profile}  />
                    <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                            {author}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {date}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}
export default Header;

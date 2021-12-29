import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    title: {
        backgroundColor:"brown"
    },
    author: {
        display: "flex"
    },
    red:{
        backgroundColor:"red"
    },
    green:{
        backgroundColor:"green"
    },
    blue:{
        backgroundColor:"blue"
    },
}));

function Header(props) {
    const classes = useStyles();
    const { title, author, date, profile, description } = props;

    return (
        <Container maxWidth="lg">
            <Typography
                component="h2"
                variant="h3"
                color="inherit"
                align="center"
                noWrap
                className={classes.title}
            >
                {title}
            </Typography >
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.blue}>
                {description}
            </Typography>
            <Divider />
            <Container className={classes.red}>
                <Box className={classes.author} mt={2}>
                    <Avatar src={profile} />
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
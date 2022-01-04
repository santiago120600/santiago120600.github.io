import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
    },
    icon: {
        width: '55px',
        height: '55px',
    },
    imageIcon: {
        height: '100%',
    },
}));

function Navigation() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar
            >
                <Icon 
                    className={classes.icon}
                >
                    <img 
                        className={classes.imageIcon}
                        src="/logo.svg" 
                        alt=""
                        />
                </Icon>
                <Typography 
                    variant="h6" 
                    color="primary"
                >
                    <Link
                        style={{ textDecoration: 'none' }}
                        component={RouterLink}
                        to="/"
                    >
                        Programundo
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;

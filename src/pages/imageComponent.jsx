import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    image:{
        width:"100%"
    },
}));

function ImageComponent(props) {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="80%"
            >
                <img src={props.image} alt="" className={classes.image}/>
            </Box>
        </Box>
    );
}
export default ImageComponent;



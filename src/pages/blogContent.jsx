import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ImageComponent from './imageComponent';

const useStyles = makeStyles((theme) => ({
    content:{
        marginTop:"40px",
        marginBottom:"20px",
    },
}));

function BlogContent({children, image}) {
    const classes = useStyles();

    return (
        <Container 
            className={classes.content}
            >
            <ImageComponent 
                image={image}
                />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{mt: 6,  width: '75%' }}
                >
                    {children}
                </Box>
            </Box>    
        </Container>
    );
}
export default BlogContent;


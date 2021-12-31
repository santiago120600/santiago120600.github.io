import React from "react";
import Header from './headerArticle';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'react-gist';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageComponent from './imageComponent';

const useStyles = makeStyles((theme) => ({
    content:{
        marginTop:"40px",
        backgroundColor:"white"
    },
}));

function BlogTemplate() {
    const classes = useStyles();

    return (
        <>
            <Header title="How to Dockerize Django in 5 minutes" author="Santiago Castañón Arvizu" date="27 Diciembre, 2021" profile="/images/me.jpg" description="This tutorial will show you how to Dockerize a Django project in less than 5 minutes. If you've been working with Django for a while, chances are you've heard of Docker before. But here's a quick summary of Docker and why you should consider using it in your project."/>
            <Container 
                className={classes.content}
                >
                <ImageComponent 
                    image="/images/django-docker.webp"
                    />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="white"
                >
                    <Box
                        sx={{mt: 6,  width: '75%' }}
                    >
                        <Typography
                            variant="subtitle1"
                            align="left"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                        </Typography>
                        <Gist id='a228da2a7b7fd710240e3563215276f5' />
                    </Box>
                </Box>    
            </Container>
        </>
    );
}
export default BlogTemplate;

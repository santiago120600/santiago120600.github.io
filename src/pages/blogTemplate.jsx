import React from "react";
import Header from './headerArticle';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'react-gist';

const useStyles = makeStyles((theme) => ({
    pink:{
        backgroundColor:"pink"
    },
}));

function BlogTemplate() {
    const classes = useStyles();

    return (
        <>
            <Header title="Docker Django" author="Santiago Castañón Arvizu" date="27 Diciembre, 2021" profile="/images/me.jpg" description="En este artículo aprenderás como usar docker para Django"/>
            <Container className={classes.pink}>
                <h1>Hola mundo</h1>
                <Gist id='a228da2a7b7fd710240e3563215276f5' />
            </Container>
        </>
    );
}
export default BlogTemplate;
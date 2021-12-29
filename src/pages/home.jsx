import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hero from './hero';
import CardComponent  from './card';

const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    },
}));

function HomePage() {
    const classes = useStyles();

    return (
        <>
            <Hero />
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Artículos
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardComponent title="Docker Django" image="/images/docker.png" desc="Contenedor Docker + Nginx + Gunicorn" avatar="/images/me.jpg" author="Santiago Castañón Arvizu" date="27 Diciembre, 2021" goto="/blog"/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default HomePage;
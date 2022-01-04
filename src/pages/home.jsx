import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hero from './hero';
import CardComponent  from './card';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3),
        marginBottom:"20px",
    },
    blogTitle: {
        fontWeight: 800,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    },
}));

const blogs = [
    {title:'Hola Mundo Django Rest Framework, Docker, Nginx y Gunicorn', image:'/images/docker.png',desc:'DRF + Docker + Nginx + Gunicorn',avatar:'/images/me.jpg',author:'Santiago Castañón Arvizu',date:'3 Enero, 2022',goto:'/docker+django+nginx+gunicorn'},
];

function HomePage() {
    const classes = useStyles();

    return (
        <>
            <Hero />
            <Container 
                maxWidth="lg" 
                className={classes.blogsContainer}>
                <Typography 
                    variant="h4" 
                    className={classes.blogTitle}>
                    Artículos
                </Typography>
                <Grid container spacing={3}>
                    {blogs.map((item, index)=>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardComponent title={item.title} image={item.image} desc={item.desc} avatar={item.avatar} author={item.author} date={item.date} goto={item.goto}/>
                    </Grid>
                    )}
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default HomePage;

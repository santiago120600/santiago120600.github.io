import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hero from './hero';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
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
                        <Card className={classes.card}>
                            <CardActionArea component={RouterLink} to="/blog">
                                <CardMedia
                                    className={classes.media}
                                    image="/images/docker.png"
                                    title="Docker"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Docker Django
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Contenedor Docker + Nginx + Gunicorn
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="/images/me.jpg" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Santiago Castañón Arvizu
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            27 Diciembre, 2021
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default HomePage;
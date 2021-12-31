import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
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
}));

function CardComponent(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea component={RouterLink} to={props.goto}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                    <Avatar src={props.avatar} />
                    <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                            {props.author}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {props.date}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                </Box>
            </CardActions>
        </Card>
    );
}
export default CardComponent;



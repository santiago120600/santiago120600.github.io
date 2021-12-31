import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor:"#252620",
    color:"#fff",
  },
}));

function CodeContainer({ children }) {
  const classes = useStyles();

  return (
    <Card 
      variant="outlined"
      className={classes.body}
    >
      <CardContent>
        <code>
          {children}
        </code>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default CodeContainer;




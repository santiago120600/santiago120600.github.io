import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor:"#252620",
    color:"#fff",
    marginBottom:"10px",
    marginTop:"10px",
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
    </Card>
  );
}
export default CodeContainer;




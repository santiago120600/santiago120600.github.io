import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const useStyles = makeStyles((theme) => ({
    image:{
        width:"100%"
    },
}));

function ImageComponent(props) {
    const classes = useStyles();
    const [showLight, setShowLight] = useState(null);
    
    const hideLightBox = () => {
        setShowLight(null);
    };

    const showLightBox = ()=>{
        setShowLight(true);
    }

    return (
        <>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="80%"
            >
                <img 
                    src={props.image} alt="" 
                    className={classes.image}
                    onClick={showLightBox}
                />
            </Box>
        </Box>
        {showLight ? (
        <Lightbox
          image={props.image}
          title={props.title}
          onClose={hideLightBox}
        />
      ) : null}
        </>
    );
}
export default ImageComponent;



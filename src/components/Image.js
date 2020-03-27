import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';

const Image = (props) => {

    const {useState, useRef} = React;
    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {
      if (props.item.img_url.length) {
        setLoading(false);
      }
    }
    return <React.Fragment>
      <div style={{display: loading ? "block" : "none"}}>
        <LinearProgress color="secondary" />
        <Typography id="sort-by" gutterBottom>
            Loading ...
        </Typography>
      </div>
      <div style={{display: loading ? "none" : "block"}}>
          <img 
            src={props.item.img_url}
            alt={props.item.name}
            onLoad={imageLoaded}/>
      </div>
    </React.Fragment>;
  }

  export default Image;
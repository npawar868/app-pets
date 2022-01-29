import React from 'react';
import {CardContent, CardMedia, CardActions} from "@material-ui/core";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const PetCard = (props)=>{
    console.log('pet card ---', props.petData);
    const {name, imageurl, description } = props.petData
    return (
        <div style={{margin:'10px', maxWidth:'200px', border: '1px solid grey'}}>
        <Box sx={{ maxWidth: 275 }}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {name.toUpperCase()}
            </Typography>
            <CardMedia
                component="img"
                height="194"
                image={imageurl}
                alt="pet image"
            />
            <Typography variant="body2">
              <br />
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
        </Box>
        </div>
      );
}


export default  PetCard
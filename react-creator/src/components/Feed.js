import React from 'react';
import {Grid,GridItem} from "@chakra-ui/react"
import VideoCard from './VideoCard'

const Feed=()=>{
    return (
      <Grid margin={2}
      templateColoumns='repeat(5,1fr)'>
        <GridItem>
          <VideoCard />
        </GridItem>
        <GridItem>
          <VideoCard />
        </GridItem>
        <GridItem>
          <VideoCard />
        </GridItem>
        <GridItem>
          <VideoCard />
        </GridItem>
      </Grid>
    );
}

export default Feed;
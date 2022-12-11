import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import VideoCard from './VideoCard'

const Feed=()=>{
    return (
      <SimpleGrid columns={5} spacingX={1} spacingY={5} margin={1} p={2} borderWidth={1}>
        <VideoCard />
      </SimpleGrid>
    );
}

export default Feed;
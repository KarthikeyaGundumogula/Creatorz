import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import VideoCard from './VideoCard'

const Feed=()=>{
    return (
      <SimpleGrid columns={5} spacingX={1} spacingY={5}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </SimpleGrid>
    );
}

export default Feed;
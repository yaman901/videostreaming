import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = React.useMemo(
    () => [
      'https://www.pexels.com/download/video/33975185/',
      'https://www.pexels.com/download/video/33757852/',
      'https://www.pexels.com/download/video/36487791/',
      'https://www.pexels.com/download/video/33746484/',
      'https://www.pexels.com/download/video/37829461/',
    ],
    []
  );

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  const handleSelectVideo = React.useCallback(
    (item) => {
      setVideoSrc(item);
    },
    []
  );

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          autoPlay
          muted
          playsInline
          controls
          controlsList="nodownload"
          preload="metadata"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1 </Heading>
          <Text>
            This is a sample video for testing and dem. THis is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            key={item}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => handleSelectVideo(item)}
            isActive={item === videoSrc}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

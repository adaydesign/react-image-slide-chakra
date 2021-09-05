import { ChakraProvider } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { ImageSlide } from './lib'

const App = () => {

  const images = useMemo(() => [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ], [])

  const captions = useMemo(() => [
    'caption for image1.jpg',
    'caption for image2.jpg',
    'caption for image3.jpg',
    'caption for image4.jpg'
  ], [])

  return (
    <ChakraProvider>
      <ImageSlide images={images} captions={captions} />
    </ChakraProvider>
  )
}

export default App


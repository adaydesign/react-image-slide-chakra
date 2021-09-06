# React Image Slide Example

- with Chakra UI
- npm : https://www.npmjs.com/package/react-chakra-slide-show

## 1. Install React and Chakra UI (v.1.6.7)
```
npx create-react-app my-app
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

## 2. Install This Package
```
npm i react-chakra-slide-show
```

## Example Code

```js
import { ChakraProvider } from '@chakra-ui/react'
import { ImageSlide } from 'react-chakra-slide-show'
import React, { useMemo } from 'react'

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
```

## API

ImageSlide's properties

|Property|Type|M/O|Default|Description|
|---|---|---|---|---|
|images|string array|required||list of image path|
|captions|string array|required||list of image's caption|
|auto|int|optional|default: 5000|delay time, if 0 is not automatic change image|
|minH|string|optional|default: "500px"|image's height|

## Demo

https://appcodemia-react-slide.netlify.app


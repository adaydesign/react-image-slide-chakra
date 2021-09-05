import { Button, Collapse, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

const defaultValues = {
    images: null,
    captions: null,
    index: 0,
    prevIndex: -1
}
const ImageSlideContext = createContext(defaultValues)

const ImageSlideController = ({ auto }) => {
    const [slide, setSlide] = useContext(ImageSlideContext)
    const changeSlide = (index) => {
        if (index >= slide?.images.length) {
            index = 0
        }
        setSlide(prev => {
            return {
                ...prev,
                index: index
            }
        })
    }

    const autoSlide = useRef()
    autoSlide.current = () => {
        const interval = setInterval(() => {
            setSlide(prev => {
                return {
                    ...prev,
                    index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1
                }
            })
        }, auto)
        return () => clearInterval(interval)
    }
    useEffect(() => {
        if (auto > 0) autoSlide.current()
    }, [])

    return (
        <HStack mt={4} w="full" justify="center">
            {slide?.images && slide?.images.map((img, index) =>
                <Button onClick={() => changeSlide(index)} colorScheme={slide?.index === index ? "blue" : "gray"} key={`button_${img}`}>
                    {index + 1}
                </Button>)}
        </HStack>
    )
}

const ImageDisplay = ({ minH }) => {
    const [slide] = useContext(ImageSlideContext)

    return (
        slide?.images &&
        <Flex align="center" direction="column" minH={minH}>
            {slide?.images && slide?.images.map((img, index) =>
                <Collapse animateOpacity in={index === slide?.index} key={`image_${img}`}>
                    <Image src={img} />
                </Collapse>
            )}
        </Flex>

    )
}

const CaptionDisplay = () => {
    const [slide] = useContext(ImageSlideContext)
    const caption = useMemo(() => {
        return slide?.captions[slide?.index]
    }, [slide])

    return (
        <Flex w="full" p={4} justify="center">
            <Text>{caption}</Text>
        </Flex>
    )
}

const ImageSlide = ({ images, captions, auto = 5000 }) => {
    const [slide, setSlide] = useState({ ...defaultValues, images: images, captions: captions })

    return (
        <ImageSlideContext.Provider value={[slide, setSlide]}>
            <Flex w="full" direction="column">
                <ImageDisplay minH="500px" />
                <CaptionDisplay />
                <ImageSlideController auto={auto} />
            </Flex>
        </ImageSlideContext.Provider>
    )
}

export default ImageSlide

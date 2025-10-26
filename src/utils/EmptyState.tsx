import { Box, Center, Text } from '@chakra-ui/react'
import LottieFiles from './LottieFiles'

export function EmptyState({ title, width, height }: { title: string, width?: number, height?: number }) {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    return (
        <Center flex={1} flexDirection="column">
            <Box width={width || "300px"} height={height || "300px"}>
                <LottieFiles groovyWalkAnimation={require('./house.json')} />
            </Box>
            <Text fontStyle={"italic"}>{title ? title : "No data found"}</Text>
        </Center>
    )
}
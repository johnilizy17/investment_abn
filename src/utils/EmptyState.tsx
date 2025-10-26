import { Box, Center, Text } from '@chakra-ui/react'
import LottieFiles from './LottieFiles'
import house from './house.json'

export function EmptyState({ title, width, height }: { title: string, width?: number, height?: number }) {


    return (
        <Center flex={1} flexDirection="column">
            <Box width={width || "300px"} height={height || "300px"}>
                <LottieFiles groovyWalkAnimation={house} />
            </Box>
            <Text fontStyle={"italic"}>{title ? title : "No data found"}</Text>
        </Center>
    )
}
import { Center, Text } from '@chakra-ui/react'

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
            <Text>{title ? title : "No data found"}</Text>
        </Center>
    )
}
import { COLORS } from "@/utils/theme"
import { Box, Button, Center, Circle, CloseButton, Drawer, HStack, Icon, Image, Portal, Separator, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useSelector } from "react-redux"
export const KYCAlertModel = () => {

    const groupList = ["Secience", "Math", "English", "Art"]
    const router = useRouter()
    const [choiceGroup, setChoiceGroup] = useState("")
    const [page, setPage] = useState(1)
    const [topic, setTopic] = useState("")
    const [open, setOpen] = useState(false)
    const { wallet } = useSelector((a: { auth: { wallet: any } }) => a.auth)

    useEffect(() => {
        console.log(wallet)
        if (wallet) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [])

    return (
        <Drawer.Root open={open} onOpenChange={(details) => {
            setOpen(details.open)
        }} placement={"bottom"}>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title p={4}>         Complete Your KYC to Unlock Full AccessS
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body px={4}>
                            <Box>
                                Complete Your KYC to Unlock Full Access

                                To ensure the security of your account and comply with financial regulations, please complete your KYC (Know Your Customer) verification.
                            </Box>
                            <Center mb="40px" mt="20px">
                                <Button
                                    onClick={() => router.push("/auth/kyc")}
                                    borderRadius={"12px"}
                                    p={4} bg={COLORS.blue} w="300px">
                                    Complete
                                </Button>
                            </Center>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

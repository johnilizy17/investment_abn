import { navRouters } from '@/utils/constants';
import { COLORS } from '@/utils/theme';
import {
    HStack,
    Text,
    Link,
    Box
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function LaptopMenu() {

    const router = useRouter()
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)

    function ColorSection(path: string) {
        const active = router.pathname === path
        return active ? COLORS.blue : COLORS.deep_black
    }

    function DisableDashboard(path: string) {
        const active = (path.includes("dashboard") || path.includes("portfolio")) && (user &&!user.id || !user) ? "none" : "block"
        return active
    }

    return (
        <Box display={["none", "none", "none", "block"]}>
            <HStack align="start" spaceX={3}>
                {navRouters.map((a, b) => (
                    <Box fontSize="13px" w="100px" fontWeight={"00"} onClick={() => router.push(a.nav)} display={DisableDashboard(a.nav)} cursor="pointer" color={ColorSection(a.nav)} key={b}>
                        {a.name}
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}

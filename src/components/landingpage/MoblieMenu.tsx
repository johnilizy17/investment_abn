import { navRouters } from '@/utils/constants';
import { COLORS } from '@/utils/theme';
import {
    VStack,
    Text,
    Link,
    Box
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function MoblieMenu() {

    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)


    function ColorSection(path: string) {
        const active = router.pathname === path
        return active ? COLORS.blue : COLORS.deep_black
    }

    function DisableDashboard(path: string) {
        const active = (path.includes("dashboard") || path.includes("portfolio")) && (user && !user.id || !user) ? "none" : "block"
        return active
    }

    return (
        <Box p={"16px"}>
            <VStack align="start" spaceY={3}>
                {navRouters.map((a, b) => (
                    <Box display={DisableDashboard(a.nav)} onClick={() => router.push(a.nav)} fontSize={"16px"} cursor="pointer" color={ColorSection(a.nav)} w="full" key={b}>
                        {a.name}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}

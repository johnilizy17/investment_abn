import { navRouters } from '@/utils/constants';
import { COLORS } from '@/utils/theme';
import {
    VStack,
    Text,
    Link,
    Box
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function MoblieMenu() {

    const router = useRouter()

    function ColorSection(path: string) {
        const active = router.pathname === path
        return active ? COLORS.blue : COLORS.deep_black
    }

  function DisableDashboard(path: string) {
        const active = path.includes("dashboard/") ? "none" : "block"
        return active
    }

    return (
        <Box p={"16px"}>
            <VStack align="start" spaceY={3}>
                {navRouters.map((a, b) => (
                    <Box display={DisableDashboard(a.nav)} onClick={()=>router.push(a.nav)} fontSize={"16px"} cursor="pointer" color={ColorSection(a.nav)} w="full" key={b}>
                        {a.name}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}

import { COLORS } from "@/utils/theme";
import {
    Flex,
    InputGroup,
    Input,
    Button,
    Select,
    IconButton,
    Box,
    createListCollection,
    Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilter, MdSettings } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

export default function SearchFilter() {

    const [value, setValue] = useState<string[]>([])
    const frameworks = createListCollection({
        items: [
            { label: "Highest Yield", value: "1" },
            { label: "Lowest Yield", value: "2" },
        ],
    })
    return (
        <Flex align="center" gap={4}>
            <InputGroup bg="#0049AF1A" _active={{ borderColor: COLORS.blue }} startElement={<Box p="10px"><FaSearch color={COLORS.blue} /></Box>}>
                <Input _placeholder={{ color: COLORS.blue }} placeholder="Search land banks by name or location" />
            </InputGroup>

            <Select.Root

                collection={frameworks}
                width="190px"
                value={value}
                onValueChange={(e) => setValue(e.value)}
            >
                <Select.HiddenSelect />
                <Select.Control px={4} bg="#0049AF1A" >
                    <Select.Trigger>
                        <Select.ValueText fontWeight={"800"} color={COLORS.blue} placeholder="Select framework" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {frameworks.items.map((framework) => (
                                <Select.Item item={framework} key={framework.value}>
                                    {framework.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            <IconButton bg="transparent" borderWidth={"1px"} borderColor={COLORS.blue} aria-label="Filter" >
                <VscSettings color={COLORS.blue} />
            </IconButton>
        </Flex>
    );
}

import { getAssetAll, setInvestment } from "@/url/redux/slices/assetSlice";
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
import { useDispatch, useSelector } from "react-redux";

export default function SearchFilter() {

    const [value, setValue] = useState<string[]>([])
    const dispatch = useDispatch();
    const { investment } = useSelector((a: { asset: { investment: any } }) => a.asset)
    const frameworks = createListCollection({
        items: [
            { label: "Highest Yield", value: "1" },
            { label: "Lowest Yield", value: "2" },
        ],
    })

    function sortByPercentage(data: any, order = 'asc') {
        return [...data].sort((a, b) => {
            if (order === 'asc') return a.percentage - b.percentage;
            else return b.percentage - a.percentage;
        });
    }
    return (
        <Flex align="center" gap={4}>
            <InputGroup bg="#0049AF1A" _active={{ borderColor: COLORS.blue }} startElement={<Box p="10px"><FaSearch color={COLORS.blue} /></Box>}>
                <Input _placeholder={{ color: COLORS.blue }}
                    onChange={(e: any) => {
                        dispatch(getAssetAll({ page: 1, status: 2, title: e.target.value }) as any)
                    }}
                    placeholder="Search land banks by name or location" />
            </InputGroup>

            <Select.Root

                collection={frameworks}
                width="190px"
                value={value}
                onValueChange={(e: any) => {
                    setValue(e.value)
                    let result
                    if (e.value == "1") {
                        result = sortByPercentage(investment.data, 'asc');
                    } else {
                        result = sortByPercentage(investment.data, 'desc');
                    }
                    // Descending
                    dispatch(setInvestment({...investment, data:result}) as any)
                }}
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

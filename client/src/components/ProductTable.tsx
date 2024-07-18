import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Flex,
    Heading,
    Button,
} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'



const ProductTable = () => {
    return (
        <>
            <ColorModeSwitch />
            <Box shadow={'md'} rounded={'md'} m={32}>
                <Flex justifyContent={'space-between'} px={'5'}>
                    <Heading>
                        Product List
                    </Heading>
                    <Button colorScheme='green'>
                        Add Product
                    </Button>
                </Flex>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>




        </>
    )
}

export default ProductTable
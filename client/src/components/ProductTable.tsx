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
import { AddIcon } from '@chakra-ui/icons'
import { useState } from "react"
import axios from 'axios';
import { BASE_URL } from '../constant';

interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
    isInStore:boolean
}

const [data, setData] = useState<Product[]>([])
const [isLoading, setIsLoading] = useState<boolean>(false)

const fetchData = () => {
    setIsLoading(true)
    axios.get(BASE_URL).then(response => {
        setData(response.data);
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        setIsLoading(false)
    })
}

const ProductTable = () => {
    return (
        <>
            <ColorModeSwitch />
            <Box shadow={'md'} rounded={'md'} m={32}>
                <Flex justifyContent={'space-between'} alignItems={'center'} px={'5'} mb={10}>
                    <Heading>
                        Product List
                    </Heading>
                    <Button leftIcon={<AddIcon/>} color={'teal.300'}>
                        Add Product
                    </Button>
                </Flex>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th>Is In Stock</Th>
                                <Th isNumeric>Price</Th>
                                <Th> Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>




        </>
    )
}

export default ProductTable
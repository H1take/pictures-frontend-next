"use client"
import { useRef } from "react";
import {
    Box,
    Flex,
    Button,
    Input,
    IconButton,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLInputElement | null>(null);

    return(
        <Box
            w={"full"}
            backgroundColor={"blue.500"}
            color={"white"}
            height={"70px"}
            pl={[0, 3]}
            pr={[0, 3]}
        >
           <Flex>
               <Flex mt={[3, 3]}>
                   <IconButton
                       background="none"
                       _hover={{ background: "none" }}
                       icon={<FiMenu />}
                       aria-label={""}
                       onClick={onOpen}
                       ref={btnRef}
                   />
                   <Text fontSize={["xl", "2xl"]} as="b">
                       Светлана Мучнова
                   </Text>
               </Flex>
               <Drawer
                   isOpen={isOpen}
                   placement='right'
                   onClose={onClose}
                   finalFocusRef={btnRef}
               >
                   <DrawerOverlay />
                   <DrawerContent>
                       <DrawerCloseButton />
                       <DrawerHeader>Страницы</DrawerHeader>
                       <DrawerBody display={"flex"} flexDirection={"column"} gap={2} justifyContent={"flex-start"} alignItems={"center"}>
                           <Link href={"/about"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   Об авторе
                               </Button>
                           </Link>
                           <Link href={"/about-pictures"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   О картинах
                               </Button>
                           </Link>
                           <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                               Энерегетические картины и иконы
                           </Button>
                           <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                               Кристаллы и камни
                           </Button>
                           <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                               Дискуссия о жизни
                           </Button>
                           <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                               Мероприятия
                           </Button>
                           <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                               Отзывы
                           </Button>
                       </DrawerBody>
                   </DrawerContent>
               </Drawer>
           </Flex>
        </Box>
    );
};

export default Header;
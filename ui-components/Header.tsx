"use client"
import {useCallback, useRef} from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Select,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {RootState} from "@/store/type";
import {changeLanguage} from "@/store/slices/language.slice";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);

    const dispatch = useAppDispatch();

    const { admin, isLoggedIn } = useAppSelector((state: RootState) => state.admin);
    const { language }  = useAppSelector((state: RootState) => state.language);

    const onChangeLanguage = useCallback((value: string) => {
        dispatch(changeLanguage(value))
    }, [dispatch]);

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
                       {language === "ru" ? "Светлана Мучнова" : "Svetlana Mychnova"}
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
                                   {language === "ru" ? "Об авторе" : "About author"}
                               </Button>
                           </Link>
                           {isLoggedIn && <Link href={"/post/create"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"}
                                       width={"290px"}>
                                   Создать новый пост
                               </Button>
                           </Link>}
                           <Link href={"/about-pictures"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "О картинах" : "About pictures"}
                               </Button>
                           </Link>
                           <Link href={"/energy-pictures"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Энерегетические картины и иконы" : "Energy pictures and stones"}
                               </Button>
                           </Link>
                           <Link href={"/crystals-stones"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Кристаллы и камни" : "Crystals and stones"}
                               </Button>
                           </Link>
                           <Link href={"/about-life"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Дискуссия о жизни"  : "About life"}
                               </Button>
                           </Link>
                           <Link href={"/events"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Мероприятия" : "Events"}
                               </Button>
                           </Link>
                           <Link href={"/reviews"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Отзывы" : "Reviews"}
                               </Button>
                           </Link>
                           <Link href={"/reviews/create"}>
                               <Button variant="outline" colorScheme="blue" justifyContent={"flex-start"} width={"290px"}>
                                   {language === "ru" ? "Оставить отзыв" : "Post reviews"}
                               </Button>
                           </Link>
                           <Select onChange={(e) => onChangeLanguage(e.currentTarget.value)} width={"290px"} border={"1px solid #3182CE"} color={"#3182CE"} defaultValue={'ru'} placeholder='Выберите язык / Select language'>
                               <option value='ru'>Русский</option>
                               <option value='eng'>English</option>
                           </Select>
                       </DrawerBody>
                   </DrawerContent>
               </Drawer>
           </Flex>
        </Box>
    );
};

export default Header;

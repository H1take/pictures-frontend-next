"use client";
import {Box} from "@chakra-ui/react";
import {BsWhatsapp} from "react-icons/bs";
import {AiOutlineMail, AiOutlineMessage} from "react-icons/ai";


const Footer = () => {
    return(
        <Box display={"flex"} flexDirection={"column"} marginLeft={[50, 150]} marginTop={100} marginBottom={10}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
                <BsWhatsapp size={25} />
                +79157027490
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
                <AiOutlineMail size={25} />
                lana.muchnova@mail.ru
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
                <AiOutlineMessage size={25} />
                https://t.me/Svetlana_muchnova
            </Box>
        </Box>
    );
};

export default Footer;
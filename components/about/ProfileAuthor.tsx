"use client";
import {Box, Image, Text} from "@chakra-ui/react";
import {useActions, useAppSelector} from "@/store/store";
import {useEffect} from "react";
import {RootState} from "@/store/type";

const ProfileAuthor = () => {
    const { admin  } = useAppSelector((state: RootState) => state.admin);
    const { getAdminInfo } = useActions();

    useEffect(() => {
        getAdminInfo();
    }, []);
    
    return(
        <Box paddingLeft={["20px", "200px"]} paddingRight={["50px", "200px"]} marginTop={"20px"}>
            <Box mb={"20px"}>
                <Image width={300} height={200} src={`http://localhost:5000/files/${admin.photo}`} alt={"author portret"} />
            </Box>
            <Text fontSize={"24px"} textAlign={"justify"}>
                {admin.about}
            </Text>
        </Box>
    );
};

export default ProfileAuthor;
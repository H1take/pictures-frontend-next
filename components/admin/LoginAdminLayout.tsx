"use client";
import LoginAdmin from "@/components/admin/LoginAdmin";
import {Box} from "@chakra-ui/react";

const LoginAdminLayout = () => {
    return(
        <Box display={"flex"} justifyContent={"center"} mt={5}>
            <LoginAdmin />
        </Box>
    );
};

export default LoginAdminLayout;
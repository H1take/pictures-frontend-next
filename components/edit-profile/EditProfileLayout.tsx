"use client";
import EditProfile from "@/components/edit-profile/EditProfile";
import {Box} from "@chakra-ui/react";

const EditProfileLayout = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} mt={5}>
            <EditProfile />
        </Box>
    );
};

export default EditProfileLayout;
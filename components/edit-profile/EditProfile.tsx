"use client";
import {useCallback, useState} from "react";
import {Box, Button, Heading, Textarea} from "@chakra-ui/react";
import {useActions, useAppSelector} from "@/store/store";
import UploadImage from "@/components/images/UploadImage";
import {RootState} from "@/store/type";

const EditProfile = () => {
    const [aboutValue, setAboutValue] = useState<string>("");

    const { photo } = useAppSelector((state: RootState) => state.file);
    const { updateAdmin } = useActions();

    const onSubmit = useCallback(() => {
        const data = {
            login: "svetlana",
            photo: photo,
            about: aboutValue
        };

        updateAdmin(data);
    }, [aboutValue, photo]);

    return(
        <Box width={"1300px"} minHeight={"600px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box display={"flex"} justifyContent={"center"}>
                <Heading mt={5}>Обновление профиля</Heading>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={10} gap={5}>
                <UploadImage typeImg={"photo"} />
                <Textarea width={"400px"} placeholder={"Напишите о себе"} value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} />
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt={5}>
                <Button colorScheme={"blue"} onClick={onSubmit}>Сохранить</Button>
            </Box>
        </Box>
    );
};

export default EditProfile;
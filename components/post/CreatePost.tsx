"use client";
import {useCallback, useState} from "react";
import {Box, Button, Select, Textarea} from "@chakra-ui/react";
import {useActions, useAppSelector} from "@/store/store";
import UploadImage from "@/components/images/UploadImage";
import {RootState} from "@/store/type";

const CreatePost = () => {
    const [titleRu, setTitleRu] = useState<string>("");
    const [titleEng, setTitleEng] = useState<string>("");
    const [aboutRu, setAboutRu] = useState<string>("");
    const [aboutEng, setAboutEng] = useState<string>("")
    const [selectedTag, setSelectedTag] = useState<string>("");

    const { titleImage, images } = useAppSelector((state: RootState) => state.file);
    const { createPost } = useActions();

    const onChangeCategory = useCallback((value: string) => {
        setSelectedTag(value);
    }, [setSelectedTag]);

    const onSubmit = useCallback(() => {
        const data = {
            titleRu: titleRu,
            titleEng: titleEng,
            textRu: aboutRu,
            textEng: aboutEng,
            category: selectedTag,
            images: images,
            imageTitle: titleImage
        };

        createPost(data);
    }, [titleRu, aboutRu, selectedTag, images, titleImage])

    return(
        <Box width={"1300px"} minHeight={"600px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box>
                <UploadImage typeImg={"titleImage"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"400px"} padding={10} gap={3}>
                <Textarea placeholder={"Укажите название на русском"} value={titleRu} onChange={(e) => setTitleRu(e.target.value)} />
                <Textarea placeholder={"Укажите название на английском"} value={titleEng} onChange={(e) => setTitleEng(e.target.value)} />
                <Textarea placeholder={"Укажите описание на русском"} value={aboutRu} onChange={(e) => setAboutRu(e.target.value)} />
                <Textarea placeholder={"Укажите описание на английском"} value={aboutEng} onChange={(e) => setAboutEng(e.target.value)} />
                <Select onChange={(e) => onChangeCategory(e.currentTarget.value)} placeholder='Укажите страницу для поста'>
                    <option value='about-pictures'>О картинах</option>
                    <option value='energe-pictures'>Энергетические картины и иконы</option>
                    <option value='crystal-stones'>Кристаллы и камни</option>
                    <option value='about-life'>О жизни</option>
                    <option value='events'>Мероприятия</option>
                </Select>
            </Box>
            <Box>
                <UploadImage typeImg={"images"} />
            </Box>
            <Box display={"flex"} padding={10}>
                <Button colorScheme={"blue"} onClick={onSubmit}>Сохранить</Button>
            </Box>
        </Box>
    );
};

export default CreatePost;
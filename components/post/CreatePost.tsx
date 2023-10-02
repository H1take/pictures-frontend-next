"use client";
import {useState} from "react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import {Box, Button, Image, Select, Textarea} from "@chakra-ui/react";

const CreatePost = () => {
    const [titleRu, setTitleRu] = useState<string>("");
    const [titleEng, setTitleEng] = useState<string>("");
    const [aboutRu, setAboutRu] = useState<string>("");
    const [aboutEng, setAboutEng] = useState<string>("")
    const [selectedTag, setSelectedTag] = useState<any>();

    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    const maxNumber = 8;

    const onChangeImage = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        setImages(imageList as never[]);
    };

    const onChangeImageUrl = (
        image: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        setImageUrl(image as never[]);
    };

    return(
        <Box width={"1300px"} minHeight={"600px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box>
                <ImageUploading
                    multiple
                    value={imageUrl}
                    onChange={onChangeImageUrl}
                    maxNumber={1}
                >
                    {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                      }) => (
                        <Box pt={10} pl={10}>
                            <Button
                                style={isDragging ? { color: "red" } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Кликните или перенесите картинку
                            </Button>
                            &nbsp;
                            <Button onClick={onImageRemoveAll}>Удалить картинку</Button>
                            {imageList.map((image, index) => (
                                <div key={index} className="imageItemTitle">
                                    <img src={image.dataURL} alt="" width="100" />
                                </div>
                            ))}
                        </Box>
                    )}
                </ImageUploading>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"400px"} padding={10} gap={3}>
                <Textarea placeholder={"Укажите название на русском"} value={titleRu} onChange={(e) => setTitleRu(e.target.value)} />
                <Textarea placeholder={"Укажите название на английском"} value={titleEng} onChange={(e) => setTitleEng(e.target.value)} />
                <Textarea placeholder={"Укажите описание на русском"} value={aboutRu} onChange={(e) => setAboutRu(e.target.value)} />
                <Textarea placeholder={"Укажите описание на английском"} value={aboutEng} onChange={(e) => setAboutEng(e.target.value)} />
                <Select placeholder='Укажите страницу для поста'>
                    <option value='about-pictures'>О картинах</option>
                    <option value='energe-pictures'>Энергетические картины и иконы</option>
                    <option value='crystal-stones'>Кристаллы и камни</option>
                    <option value='about-life'>О жизни</option>
                    <option value='events'>Мероприятия</option>
                </Select>
                <Box>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChangeImage}
                        maxNumber={maxNumber}
                    >
                        {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                          }) => (
                            <Box>
                                <Button
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    mb={5}
                                >
                                    Кликните или перенесите картинку
                                </Button>
                                &nbsp;
                                <Button onClick={onImageRemoveAll}>
                                    Удалить все картинки
                                </Button>
                                <div className="imagesUpload">
                                    {imageList.map((image, index) => (
                                        <Box key={index}>
                                            <Image src={image.dataURL} alt="image" width={"50"} />
                                            <Box className="imageItemButtonWrapper">
                                                <Button onClick={() => onImageUpdate(index)}>
                                                    Обновить
                                                </Button>
                                                <Button onClick={() => onImageRemove(index)}>
                                                    Удалить
                                                </Button>
                                            </Box>
                                        </Box>
                                    ))}
                                </div>
                            </Box>
                        )}
                    </ImageUploading>
                </Box>
            </Box>
        </Box>
    );
};

export default CreatePost;
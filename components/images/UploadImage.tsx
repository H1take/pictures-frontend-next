"use client";
import {useCallback, useState} from "react";
import {Box, Button, Image, useToast} from "@chakra-ui/react";
import {useActions, useAppDispatch, useAppSelector} from "@/store/store";
import ImageUploading, {ImageListType} from "react-images-uploading";
import {RootState} from "@/store/type";
import {deleteImage} from "@/store/slices/file.slice";

const UploadImage = ({ typeImg }: { typeImg: string }) => {
    const toast = useToast();

    const [imageFiles, setImageFiles] = useState([]);
    let maxImages = typeImg === "title" ? 1 : 10;

    const { titleImage, images, photo, reviewImages } = useAppSelector((state: RootState) => state.file);
    const { uploadImage } = useActions();

    const dispatch = useAppDispatch();

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        setImageFiles(imageList as never[]);
    };

    const onUpload = async (file: any, typeImg: string ) => {
        try {
            const data = {
                file: file.file,
                typeImg: typeImg
            }

            uploadImage(data);
            setImageFiles([]);

            toast({
               title: "Картинка успешно загружена",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        } catch(err) {
            toast({
               title: "Невозможно загрузить картинку!",
                description: "Попробуйте снова",
                status: "error",
                duration: 5000,
                isClosable: true
            });
            console.error(err);
        }
    }

    const onRemove = useCallback((image: string, typeImg: string) => {
        const data = {
            typeImg: typeImg,
            image: image
        }
        dispatch(deleteImage(data));
    }, [dispatch]);

    // @ts-ignore
    return (
        <>
            <ImageUploading
                multiple
                value={imageFiles}
                onChange={onChange}
                maxNumber={typeImg === "titleImage" ? 1 : 8}
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
                        {typeImg === "titleImage" && !titleImage && imageList.map((image, index) => (
                            <Box key={index} mt={3}>
                                <Image src={image.dataURL} alt={typeImg} width={"150px"} borderRadius={"1.5rem"} />
                                <Box display={"flex"} mt={3} gap={3}>
                                    <Button colorScheme={"green"} onClick={() => onUpload(image, "titleImage")}>Загрузить</Button>
                                    <Button colorScheme={"red"}>Удалить</Button>
                                </Box>
                            </Box>
                        ))}
                        {typeImg === "photo" && !photo && imageList.map((image, index) => (
                            <Box key={index} mt={3}>
                                <Image src={image.dataURL} alt={typeImg} width={"150px"} borderRadius={"1.5rem"} />
                                <Box display={"flex"} mt={3} gap={3}>
                                    <Button colorScheme={"green"} onClick={() => onUpload(image, "photo")}>Загрузить</Button>
                                    <Button colorScheme={"red"}>Удалить</Button>
                                </Box>
                            </Box>
                        ))}
                        {typeImg === "photo" && photo && <Box>
                            <Image src={`http://localhost:5000/files/${photo}`} alt={photo} width={"150px"} borderRadius={"1.5rem"} />
                            <Box display={"flex"} mt={3} gap={3}>
                                <Button colorScheme={"red"} onClick={() => onRemove(photo, "photo")}>Удалить</Button>
                            </Box>
                        </Box>}
                        {typeImg === "titleImage" && titleImage && <Box>
                            <Image src={`http://localhost:5000/files/${titleImage}`} alt={titleImage} width={"150px"} borderRadius={"1.5rem"} />
                            <Box display={"flex"} mt={3} gap={3}>
                                <Button colorScheme={"red"} onClick={() => onRemove(titleImage, "titleImage")}>Удалить</Button>
                            </Box>
                        </Box>}
                        {typeImg === "images" && imageList.map((image, index) => (
                            <Box key={index} mt={3}>
                                <Image src={image.dataURL} alt={typeImg} width={"150px"} borderRadius={"1.5rem"} />
                                <Box display={"flex"} mt={3} gap={3}>
                                    <Button colorScheme={"green"} onClick={() => onUpload(image, "images")}>Загрузить</Button>
                                    <Button colorScheme={"red"}>Удалить</Button>
                                </Box>
                            </Box>
                        ))}
                        {typeImg === "images" && images && images.map((image, index) => {
                            return (
                                <Box key={index} mt={3}>
                                    <Image src={`http://localhost:5000/files/${image}`} alt={image} width={"150px"} borderRadius={"1.5rem"} />
                                    <Box display={"flex"} mt={3} gap={3}>
                                        <Button colorScheme={"red"} onClick={() => onRemove(image, "images")}>Удалить</Button>
                                    </Box>
                                </Box>
                            )
                        })}
                        {typeImg === "reviewImages" && imageList.map((image, index) => (
                            <Box key={index} mt={3}>
                                <Image src={image.dataURL} alt={typeImg} width={"150px"} borderRadius={"1.5rem"} />
                                <Box display={"flex"} mt={3} gap={3}>
                                    <Button colorScheme={"green"} onClick={() => onUpload(image, "reviewImages")}>Загрузить</Button>
                                    <Button colorScheme={"red"}>Удалить</Button>
                                </Box>
                            </Box>
                        ))}
                        {typeImg === "reviewImages" && reviewImages && reviewImages.map((image, index) => {
                            return (
                                <Box key={index} mt={3}>
                                    <Image src={`http://localhost:5000/files/${image}`} alt={image} width={"150px"} borderRadius={"1.5rem"} />
                                    <Box display={"flex"} mt={3} gap={3}>
                                        <Button colorScheme={"red"} onClick={() => onRemove(image, "reviewImages")}>Удалить</Button>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </ImageUploading>
        </>
    );
};

export default UploadImage;
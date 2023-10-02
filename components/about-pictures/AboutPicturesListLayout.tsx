"use client";
import AboutPicturesList from "@/components/about-pictures/AboutPicturesList";
import Footer from "@/ui-components/Footer";
import {Box} from "@chakra-ui/react";

const AboutPicturesListLayout = () => {
    return(
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"}  mt={10}>
                <AboutPicturesList />
            </Box>
            <Footer />
        </Box>
    );
};

export default AboutPicturesListLayout;
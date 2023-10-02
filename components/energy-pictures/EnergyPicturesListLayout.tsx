"use client";
import Footer from "@/ui-components/Footer";
import {Box} from "@chakra-ui/react";
import AboutLifeList from "@/components/about-life/AboutLifeList";

const AboutLifeListLayout = () => {
    return(
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"}  mt={10}>
                <AboutLifeList />
            </Box>
            <Footer />
        </Box>
    );
};

export default AboutLifeListLayout;
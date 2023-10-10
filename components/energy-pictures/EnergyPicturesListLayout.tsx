"use client";
import Footer from "@/ui-components/Footer";
import {Box} from "@chakra-ui/react";
import EnergyPicturesList from "@/components/energy-pictures/EnergyPicturesList";

const EnergyPicturesListLayout = () => {
    return(
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"}  mt={10}>
                <EnergyPicturesList />
            </Box>
            <Footer />
        </Box>
    );
};

export default EnergyPicturesListLayout;
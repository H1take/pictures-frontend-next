"use client";
import Footer from "@/ui-components/Footer";
import {Box} from "@chakra-ui/react";
import CrystalStonesList from "@/components/crystal-stones/CrystalStonesList";

const CrystalStonesLayout = () => {
    return(
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"} mt={10}>
                <CrystalStonesList />
            </Box>
            <Footer />
        </Box>
    );
};

export default CrystalStonesLayout;
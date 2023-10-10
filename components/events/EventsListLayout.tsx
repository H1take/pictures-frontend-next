"use client";
import Footer from "@/ui-components/Footer";
import {Box} from "@chakra-ui/react";
import EventsList from "@/components/events/EventsList";

const EventsListLayout = () => {
    return(
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"}  mt={10}>
                <EventsList />
            </Box>
            <Footer />
        </Box>
    );
};

export default EventsListLayout;
"use client";
import {Provider} from "react-redux";
import {store} from "../store/store";
import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider} from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <CacheProvider>
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
        </Provider>
    );
}
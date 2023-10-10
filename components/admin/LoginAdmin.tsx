"use client";
import {useCallback, useState} from "react";
import {Box, Button, Heading, Input} from "@chakra-ui/react";
import {useActions} from "@/store/store";
import {useRouter} from 'next/navigation';

const LoginAdmin = () => {
    const router = useRouter();

    const [loginValue, setLoginValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");

    const { login } = useActions();

    const onSubmit = useCallback(async () => {
        const data = {login: loginValue, password: passwordValue};
        login(data);

        router.push('/about');
    }, [loginValue, passwordValue]);

    return(
        <Box width={"800px"} minHeight={"300px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box display={"flex"} justifyContent={"center"} mt={3}>
                <Heading>Вход в аккаунт</Heading>
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt={10}>
                <Box display={"flex"} flexDirection={"column"} gap={3}>
                    <Input onChange={(e) => setLoginValue(e.target.value)} width={"300px"} placeholder={"Логин"} />
                    <Input onChange={(e) => setPasswordValue(e.target.value)} placeholder={"Пароль"} />
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Button onClick={onSubmit} colorScheme={"blue"} width={"150px"} mt={3}>Войти</Button>
            </Box>
        </Box>
    );
};

export default LoginAdmin;
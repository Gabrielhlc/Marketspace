import { Center, Text, VStack, View } from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from '@assets/logo.svg';

export function SignIn() {
    return (
        <VStack>
            <View
                px={10}
                backgroundColor="gray.600"
                pb="16"
                borderBottomRadius={24}
            >

                <Center mt="20">
                    <LogoSvg />
                    <Text color="gray.100" fontSize={38} fontWeight="bold" mt={2}>
                        marketspace
                    </Text>
                    <Text color="gray.300" fontSize="md">
                        Seu espaço de compra e venda
                    </Text>
                </Center>

                <VStack space={4} alignItems="center" mt={16}>
                    <Text
                        color="gray.200"
                        fontSize="sm"
                    >
                        Acesse sua conta
                    </Text>

                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" input="password" />

                    <Button
                        title="Entrar"
                        variant="blue"
                        mt={4}
                    />
                </VStack>
            </View>

            <Center mt="10" px={10}>
                <Text
                    color="gray.200"
                    fontSize="sm"
                >
                    Ainda não tem acesso?
                </Text>

                <Button
                    title="Criar uma conta"
                    variant='gray'
                    mt={4}
                />
            </Center>
        </VStack>
    );
}
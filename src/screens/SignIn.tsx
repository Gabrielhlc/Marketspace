import { Center, Text, VStack, View } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from '@assets/logo.svg';
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

    return (
        <VStack>
            <View
                px={10}
                bg="gray.600"
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
                        w="100%"
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
                    w="100%"
                    title="Criar uma conta"
                    variant='gray'
                    mt={4}
                    onPress={handleNewAccount}
                />
            </Center>
        </VStack>
    );
}
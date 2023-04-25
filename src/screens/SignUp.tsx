import { Center, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { Avatar } from "@components/Avatar";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from '@assets/logo.svg';
import avatarDefault from '@assets/avatarDefault.png';

export function SignUp() {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack
                flex={1}
                px={10}
                backgroundColor="gray.600"
                pb={12}
            >
                <Center mt={10}>
                    <LogoSvg width={60} />

                    <Text
                        color="gray.100"
                        fontFamily="heading"
                        fontSize="xl"
                    >
                        Boas vindas!
                    </Text>

                    <Text
                        color="gray.200"
                        fontSize="sm"
                        textAlign="center"
                    >
                        Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                    </Text>
                </Center>

                <VStack
                    space={4}
                    justifyContent="center"
                    alignItems="center"
                    mt={8}
                >
                    <Avatar
                        source={avatarDefault}
                        changeAvatarButton
                        size={22}
                        alt="Avatar"
                    />

                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Telefone" />
                    <Input placeholder="Senha" input="password" />
                    <Input placeholder="Confirmar senha" input="password" />
                </VStack>

                <Button
                    w="100%"
                    title="Criar"
                    variant="black"
                    mt={6}
                />

                <Center mt="8">
                    <Text color="gray.200" fontSize="sm">
                        Já tem uma conta?
                    </Text>

                    <Button
                        w="100%"
                        title="Ir para o login"
                        variant='gray'
                        mt={4}
                        onPress={handleGoBack}
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}
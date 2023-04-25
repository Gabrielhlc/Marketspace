import { TouchableOpacity } from "react-native";
import { HStack, ScrollView, Text, VStack } from "native-base";

import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";

import { ArrowRight, Tag } from "phosphor-react-native";

export function Home() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack px={5}>
                <HStack mt={16} alignItems="center" space={2}>
                    <Avatar size={55} source={{ uri: "https://github.com/Gabrielhlc.png" }} alt="Avatar" />
                    <Text
                        color="gray.100"
                        fontSize="md"
                        flex={1}
                    >
                        Boas vindas, Gabriel!
                    </Text>

                    <Button
                        flex={1}
                        icon="plus"
                        title="Criar anúncio"
                        variant="black"
                    />
                </HStack>

                <VStack mt={8} space={3}>
                    <Text
                        fontSize="sm"
                        color="gray.300"
                    >
                        Seus produtos anunciados para venda
                    </Text>

                    <HStack
                        w="full"
                        h={66}
                        py={3}
                        pr={5}
                        pl={4}
                        alignItems="center"
                        justifyContent="space-between"
                        background="rgba(var(--blue-light), 0.1)"
                        borderRadius={6}
                    >
                        <HStack alignItems="center" space={4}>
                            <Tag size={22} color="#364D9D" />

                            <VStack>
                                <Text
                                    fontWeight="bold"
                                    fontSize="lg"
                                    color="gray.200"
                                >
                                    4
                                </Text>

                                <Text
                                    fontSize="xs"
                                    color="gray.200"
                                >
                                    anúncios ativos
                                </Text>
                            </VStack>
                        </HStack>

                        <TouchableOpacity>
                            <HStack alignItems="center" space={2}>
                                <Text
                                    color="blue"
                                    fontSize="xs"
                                    fontWeight="bold"
                                >
                                    Meus anúncios
                                </Text>

                                <ArrowRight size={16} color="#364D9D" />
                            </HStack>
                        </TouchableOpacity>
                    </HStack>
                </VStack>
            </VStack>

        </ScrollView>
    )
}
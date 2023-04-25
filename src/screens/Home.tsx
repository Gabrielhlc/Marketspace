import { HStack, ScrollView, Text, VStack } from "native-base";

import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";

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
            </VStack>

        </ScrollView>
    )
}
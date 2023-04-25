import { TouchableOpacity } from 'react-native';
import { Box, HStack, Input as NativeBaseInput, View } from "native-base"

import { MagnifyingGlass, Sliders } from 'phosphor-react-native';

export function Search() {
    return (
        <View justifyContent="center" bg="gray.700">
            <NativeBaseInput
                w="75%"
                maxLength={30}
                px={4}
                py={3}
                placeholder="Buscar anúncio"
                placeholderTextColor="gray.400"
                borderWidth={0}
                borderRadius={6}
                fontSize="md"
                _focus={{
                    bg: "gray.700"
                }}
            />

            <Box
                position="absolute"
                right="4"
            >
                <HStack space={3}>
                    <TouchableOpacity>
                        <MagnifyingGlass size={20} weight="bold" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box pl={3} borderLeftWidth={1} borderLeftColor="gray.400">
                            <Sliders size={20} weight="bold" />
                        </Box>
                    </TouchableOpacity>
                </HStack>
            </Box>
        </View>
    )
}
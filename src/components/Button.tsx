import { Button as NativeBaseButton, IButtonProps, Text, HStack } from 'native-base';
import { Feather } from '@expo/vector-icons'

type Props = IButtonProps & {
    icon?: keyof typeof Feather.glyphMap;
    title: string;
    variant: 'blue' | 'gray' | 'black';
}

export function Button({ icon, title, variant, ...rest }: Props) {

    return (
        <NativeBaseButton
            p={3}
            h={12}
            bg={variant === 'blue' ? "blue-light" : (variant === 'gray' ? "gray.500" : "gray.100")}
            rounded="md"
            {...rest}
        >
            <HStack alignItems="center" space={2}>
                {
                    icon &&
                    <Feather
                        name={icon}
                        color={variant === 'blue' || variant === 'black' ? "white" : "black"}
                        size={20}
                    />
                }

                <Text
                    color={variant === 'blue' || variant === 'black' ? "gray.700" : "gray.200"}
                    fontFamily="heading"
                    fontSize="sm"
                >
                    {title}
                </Text>
            </HStack>

        </NativeBaseButton>
    )
}
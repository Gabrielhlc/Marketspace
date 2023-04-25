import { Button as NativeBaseButton, IButtonProps, Text, Icon } from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant: 'blue' | 'gray' | 'black';

}

export function Button({ title, variant, ...rest }: Props) {


    return (
        <NativeBaseButton
            p={3}
            h={12}
            bg={variant === 'blue' ? "blue-light" : (variant === 'gray' ? "gray.500" : "gray.100")}
            rounded="md"
            {...rest}
        >
            <Text
                color={variant === 'blue' || variant === 'black' ? "gray.700" : "gray.200"}
                fontFamily="heading"
                fontSize="sm"
            >
                {title}
                <Icon />
            </Text>
        </NativeBaseButton>
    )
}
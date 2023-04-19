import { Button, IImageProps, Image, View } from "native-base";

import { PencilSimpleLine } from "phosphor-react-native";

type Props = IImageProps & {
    changeAvatarButton?: boolean;
    size: number;
}

export function Avatar({ size, changeAvatarButton = false, ...rest }: Props) {
    return (
        <View>
            <Image
                w={size}
                h={size}
                rounded="full"
                borderWidth={2}
                borderColor="blue-light"
                {...rest}
            />
            {changeAvatarButton ? (
                <Button
                    position="absolute"
                    bottom="0"
                    right="-12"
                    bg="blue-light"
                    p={3}
                    borderRadius={9999}
                >
                    <PencilSimpleLine size={16} color="white" />
                </Button>
            ) : ''}
        </View>
    )
}
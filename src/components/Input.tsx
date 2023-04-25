import { useEffect, useState } from "react";
import { Input as NativeBaseInput, View, IInputProps, Button } from "native-base";

import { Eye, EyeClosed } from "phosphor-react-native";

type Props = IInputProps & {
    placeholder: string;
    input?: string;
}

export function Input({ placeholder, input = "text", ...rest }: Props) {
    const [show, setShow] = useState(true);
    const [type, setType] = useState('text');

    function toggleShowPassword() {
        setShow(!show);
    }

    useEffect(() => {
        if (input === "password") {
            setType('password')
            setShow(false);
        }
    }, [])

    return (
        <View justifyContent="center">
            <NativeBaseInput
                type={type === "password" ? "password" : "text"}
                secureTextEntry={!show}
                w="full"
                bg="gray.700"
                px={4}
                py={3}
                placeholderTextColor="gray.400"
                borderWidth={0}
                borderRadius={6}
                fontSize="md"
                placeholder={placeholder}
                _focus={{
                    bg: "gray.700"
                }}
                {...rest}
            />

            {type === "password" ? (
                <Button
                    position="absolute"
                    right="0"
                    onPress={toggleShowPassword}
                    background="transparent"
                >
                    {show ? <Eye size={20} /> : <EyeClosed size={20} />}
                </Button>
            ) : ''}
        </View>
    )
}
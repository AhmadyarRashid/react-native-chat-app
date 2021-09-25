import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

interface Props {
    modeValue?: boolean,
    rest?: any,
    title: string
}

const FormButton: React.FC<Props> = ({modeValue, title, ...rest}) => {
    return (
        <Button
            mode={modeValue}
            {...rest}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        >
            {title}
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    buttonContainer: {
        width: width / 2,
        height: height / 15
    }
});

export default FormButton;

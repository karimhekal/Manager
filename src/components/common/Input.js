import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {inputStyle, containerStyle, labelStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        paddingVertical: 0
    },
    labelStyle: {
        fontSize: 18,
        paddingHorizontal: 10,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',

    }
}
export default Input;
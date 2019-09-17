import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 19,
        justifyContent:'center'
    }
    ,
    buttonStyle: {
        flex:1,
        borderWidth: 1,
        borderRadius: 5,
        height:40,
        alignSelf:'center',
        alignItems:'center',
        marginHorizontal: 5,
        backgroundColor: '#fff',
        borderColor: '#007aff',
        padding:5
    }
}
export default Button;
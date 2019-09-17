import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}
const styles = {
    containerStyle: {
        borderBottomWidth: 3,
        padding: 5,
        margin:5,
        backgroundColor: '#fff',
        borderColor: '#fff',
        flexDirection: 'row',
    }
}
export default CardSection;
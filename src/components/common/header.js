import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        margin: 10,
        color: '#000'
    },
    viewStyle: {
        alignItems: 'center',
        height: 45,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#5dddff',
        shadowColor: '#000',
        elevation: 6,
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.9,
        justifyContent: 'space-around',
        backgroundColor: 'rgb(255,255,255)',
    },
});
export default Header;
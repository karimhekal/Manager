import React from 'react'
import {StyleSheet, View} from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        flexDirection: 'column',
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        padding: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        margin: 10,
        marginTop:30
    }
});
export default Card;
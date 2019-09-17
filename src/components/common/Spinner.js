import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator></ActivityIndicator>
        </View>)
}

const styles = {
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
export default Spinner;
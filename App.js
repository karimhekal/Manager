import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from "redux";
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentDidMount() {

        try {
            console.log("Initializing app")
            const firebaseConfig = {
                apiKey: 'AIzaSyALueM-Hhfu9oOJDvxBpztdC8cT7fr7s3k',
                authDomain: 'manager-7dd07.firebaseapp.com',
                databaseURL: 'https://manager-7dd07.firebaseio.com',
                storageBucket: 'manager-7dd07.appspot.com',
                messagingSenderId: '789982757176',
            };
            firebase.initializeApp(firebaseConfig);
        } catch (e) {
            console.log("ERROR BDAAN")
            console.log(e)
        }
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;
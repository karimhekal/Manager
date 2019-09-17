import React, {Component} from 'react'
import Card from './common/Card'
import {View,Text} from 'react-native'
import CardSection from './common/CardSection'
import Button from './common/Button'
import Input from './common/Input'

import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component {
    renderError() {
        if (this.props.error) {
            return (<View>
            <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>)
        }
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        console.log("button pressed")
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input placeholder={"email@gmail.com"}
                           label={"Email"}
                           onChangeText={this.onEmailChanged.bind(this)}
                           value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input secureTextEntry
                           label={"Password"}
                           placeholder={"Password"}
                           onChangeText={this.onPasswordChanged.bind(this)}
                           value={this.props.password}/>
                </CardSection>

                {this.renderError()}
                <CardSection>
                    <Button
                        onPress={() => {
                            this.onButtonPress();
                        }}>
                        Login
                    </Button>
                </CardSection>

            </Card>

        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}



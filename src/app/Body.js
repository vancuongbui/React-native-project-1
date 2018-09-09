//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { LoginForm } from '../components/commons';
// props of LoginForm: onChangeEmail, emailValue, onChangePass, passValue, onLoginPress

//import actions from actions
import { emailChangeHandler, passChangeHandler } from '../actions';

// create a component
class Body extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { emailValue: '', passValue: '' }
    // }
    
    // emailChangeHandler = (text) => {
    //     // define function this way in order to say that, this (in here) -> to the class itself.
    //     this.setState({ emailValue: text })
    //     console.log(text);
    // };

    // passChangeHandler = (text) => {
    //     // define function this way in order to say that, this (in here) -> to the class itself.
    //     this.setState({ passValue: text })
    //     console.log(text);
    // };

    onLoginPress = () => {       
        console.log(this.props.authReducer.emailValue);
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginForm 
                    onChangeEmail={this.props.emailChangeHandler}
                    // emailValue={this.state.emailValue}
                    onChangePass={this.props.passChangeHandler}
                    // passValue={this.state.passValue}
                    onLoginPress={this.onLoginPress}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
// map state to props function
const mapStateToProps = (state) => {
    const authReducer = state.authReducer;
    return { authReducer }
}

//make this component available to the app
export default connect(mapStateToProps, { emailChangeHandler, passChangeHandler })(Body);

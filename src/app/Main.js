//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Footer, } from '../components/commons';
import Body from './Body';


// create a component
class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header 
                    headerText="Standard App"
                    onMenuPrss=""
                />
                <Body />
                <Footer />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

//make this component available to the app
export default Main;

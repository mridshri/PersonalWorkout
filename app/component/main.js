import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>--NOTER--</Text>
                </View>

                <ScrollView style = {styles.scrollContainer}>

                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='note'
                        placeholderTextColor = 'white'
                        underlineColorAndroid = 'transparent'></TextInput>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        color: 'white',
        padding: 30,

    },
    scrollContainer: {

    },
    footer: {

    },
    textInput: {

    }

});

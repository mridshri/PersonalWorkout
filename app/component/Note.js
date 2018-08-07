import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} styles={styles.note}>

                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#EDEDED'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 20,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980B9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    }
});
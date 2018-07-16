import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} styles={styles.note}>

                <Text style={styles.noteText}>this.props.val.date</Text>
                <Text style={styles.noteText}>this.props.val.note</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDel}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

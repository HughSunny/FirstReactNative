import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
export default class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.TextInputView}>
                <TextInput style={styles.TextInput}
                           underlineColorAndroid='transparent'
                           placeholder={this.props.name}
                           defaultValue={this.props.value}
                           autoCapitalize="none"
                           onChangeText={
                               (text) => {
                                   this.setState({text:text});
                                   this.props.onChangeText(text);
                               }
                           }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    TextInputView: {
        marginTop: 10,
        height:50,
        backgroundColor: '#ffffff',
        borderRadius:5,
        borderWidth:0.3,
        borderColor:'#000000',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    TextInput: {
        backgroundColor: '#ffffff',
        height:45,
        margin:18,
    },
});

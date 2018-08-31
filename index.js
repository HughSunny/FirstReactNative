import React, { Component } from 'react';
import { AppRegistry, Platform,Text,TextInput} from 'react-native';
import AddCustomProps from './app/utils/AddCustomProps'
export default class WebStormProject extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <Root/>
        );
    }

    componentDidMount = () => {
        console.disableYellowBox = true; //去除黄色弹框警告
    };
}


// 处理iOS系统文字
AddCustomProps(Text, {allowFontScaling: false});
AddCustomProps(TextInput, {allowFontScaling: false});

AppRegistry.registerComponent('WebStormProject', () => WebStormProject);
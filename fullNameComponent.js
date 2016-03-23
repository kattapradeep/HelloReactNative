'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    ToolbarAndroid,
} from 'react-native';

export default class FullNameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            fullName: ''
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
    }

    render() {
        return (
            <View>
                <ToolbarAndroid
                    title='Full Name Component' style={{ backgroundColor: '#e9eaed', height: 56 }} titleColor={'red'}/>
                <View style={ styles.container }>                    
                    <Text>{ this.state.fullName }</Text>
                    <TextInput value= { this.state.firstName }
                        placeholder = 'Please enter your first name'
                        onChangeText = { this.onChangeFirstName } >
                    </TextInput>
                    <TextInput value= { this.state.lastName }
                        placeholder = 'Please enter your last name'
                        onChangeText = { this.onChangeLastName } >
                    </TextInput>
                </View>
            </View>
        );
    }

    onChangeFirstName(text) {
        this.setState({
            firstName: text,
            fullName: text + ' ' + this.state.lastName,
        });
    }

    onChangeLastName(text) {
        this.setState({
            lastName: text,
            fullName: this.state.firstName + ' ' + text
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
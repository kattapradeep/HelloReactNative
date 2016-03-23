'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';

export default class CounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0
        };

        this.increment = this.increment.bind(this);
        this.update = this.update.bind(this);
    }

    increment() {
        this.setState({
            counterValue: this.state.counterValue + 1
        });
    }
    
    update(text){
        text = text | '0';
        
        this.setState({
            counterValue : parseInt(text)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput value={this.state.counterValue.toString()} onChangeText={this.update}></TextInput>
                </View>
                <View>
                    <Text>{this.state.counterValue}</Text>
                </View>
                <TouchableHighlight style={styles.button} onPress={this.increment}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    }
});